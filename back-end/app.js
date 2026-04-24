const express = require('express');
const cors = require('cors');
require('dotenv').config();

const session = require('express-session');
const connectPgSimple = require('connect-pg-simple');
const helmet = require('helmet');
const bcrypt = require('bcrypt');
const pool = require('./db/pool');

const app = express();
const PgStore = connectPgSimple(session);

const usersRoutes = require('./routes/users.routes');
const workoutsRoutes = require('./routes/workouts.routes');

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use(cors());
app.use(helmet());
app.use(express.json());

if (process.env.NODE_ENV === "production"){
  app.set("trust proxy", 1);
}

console.log("Session_secret:", process.env.SESSION_SECRET);
console.log("Session_secret exists:", Boolean(process.env.SESSION_SECRET));

app.use(
  session({
    store: new PgStore({
      pool,
      tableName: "user_sessions",
      createTableIfMissing: true,
    }),
    name: process.env.NODE_ENV === "production" ? "__Host-myprog.sid" : "myprog.sid",
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24 * 7,
      path: "/",
    },
  })
);

app.use((req, res, next) => {
  console.log("REQ: ", req.method, req.originalUrl);
  next();
});


app.post("/api/auth/register", async (req, res) => {
  try{
    const { name, email, password } = req.body;

    if(!name || !email || !password){
      return res.status(400).json({ error: "Missing required fields"})
    }

    const existingUser = await pool.query("SELECT id FROM users WHERE email = $1", [email]);

    if(existingUser.rows.length){
      return res.status(409).json({ error: "Email already in use"});
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const result = await pool.query(
      `INSERT INTO users (name, email, password_hash)
      VALUES ($1, $2, $3)
      RETURNING id, name, email, created_at`,
      [name, email, passwordHash]
    );

    req.session.regenerate(err => {
      if (err) return res.status(500).json({ error: "Session error"});
      req.session.user = {
        id: result.rows[0].id,
        name: result.rows[0].name,
        email: result.rows[0].email,
        authenticated: true,
      };

      res.status(201).json({ user: req.session.user});
    });
  } catch (error){
    res.status(500).json({ error: "Registration failed" });
  }
});

app.post("/api/auth/login", async (req, res) => {
  try{
    const { email, password } =  req.body;

    const result = await pool.query(
      "SELECT id, name, email, password_hash FROM users WHERE email = $1",
      [email]
    )

    const user = result.rows[0];

    if(!user){
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const ok = await bcrypt.compare(password, user.password_hash);

    if(!ok){
      return res.status(401).json({ error: "Invalid email or password" });
    }

    req.session.regenerate( err => {
      if(err) return res.status(500).json({ error: "Session error" });

      req.session.user = {
        id: user.id,
        name: user.name,
        email: user.email,
        authenticated: true,
      };

      res.json({ user: req.session.user });
    });
  } catch (error){
    res.status(500).json({ error: "Login failed" });
  }
});

app.post("/api/auth/logout", async(req, res) => {
  req.session.destroy( err => {
    if(err) return res.status(500).json({ error: "Logout failed" });

    res.clearCookie(process.env.NODE_ENV === "production" ? "__Host-myprog.sid" : "myprog.sid");
    res.json({ message: "Logout successful" });
  })
});

app.get("/api/auth/user", (req, res) => {
  if(!req.session.user){
    return res.status(401).json({ error: "Unauthorized" });
  }
  res.json({ user: req.session.user });
});

function requireAuth(req, res, next) {
  if(!req.session.user){
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
}


app.use('/api/users', requireAuth, usersRoutes);
app.use('/api/workouts', requireAuth, workoutsRoutes);

module.exports = app;