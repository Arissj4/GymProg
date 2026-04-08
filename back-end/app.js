const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

const usersRoutes = require('./routes/users.routes');
const workoutsRoutes = require('./routes/workouts.routes');

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use(cors());
app.use(express.json());
app.use('/api/users', usersRoutes);
app.use('/api/workouts', workoutsRoutes);

module.exports = app;