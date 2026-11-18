import { useNavigate, Route, Routes, useLocation } from "react-router";
import "./App.css";
import "./index.scss";
import MyWorkouts from "./pages/MyWorkouts";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Sidebar from "./pages/Sidebar";
import type { User } from "./interfaces/User";
import PageHeader from "./pages/PageHeader";
import { useEffect, useState } from "react";
import CreateWorkout from "./pages/CreateWorkout";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import { Analytics } from "@vercel/analytics/react";
import AuthenticationModel from "./models/AuthenticationModel.ts";
import LoadComponent from "./components/LoadComponent.tsx";

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  function handleNavigate(route: string): void {
    navigate(route);
  }

  useEffect(() => {
    async function loadUser() {
      try {
        const res = await AuthenticationModel.checkUser();
        setUser(res as User);
      } catch (error) {
        console.log(error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  // const checkedLogin = useRef<boolean>(false);
  const location = useLocation();
  useEffect(() => {
    function checkUserLogin() {
      if (loading) return;

      if (user?.authenticated) return;

      if (location.pathname === "/createuser" || location.pathname === "/login")
        return;

      // if (checkedLogin.current) return;
      // checkedLogin.current = true;

      navigate("/login");
    }

    checkUserLogin();
  }, [location.pathname, navigate, user, loading]);

  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading) return <LoadComponent />;

  return (
    <>
      <div id="wrapper" className="lg:rounded-[30px]">
        <div>
          <PageHeader user={user} handleNavigate={handleNavigate} />
        </div>

        {user?.authenticated ? (
          <div className="flex flex-row">
            <Sidebar
              user={user}
              setUser={setUser}
              handleNavigate={handleNavigate}
              pageSize={windowSize}
            />
            <Routes>
              <Route index element={<Home handleNavigate={handleNavigate} />} />
              <Route
                path="/profile"
                element={
                  <Profile
                    handleNavigate={handleNavigate}
                    setUser={setUser}
                    user={user}
                  />
                }
              />
              <Route
                path="/my-workouts"
                element={
                  <MyWorkouts
                    programs={["Program 1", "Program 2", "Program 3"]}
                    pageSize={windowSize}
                    handleNavigate={handleNavigate}
                  />
                }
              />
              <Route
                path="/my-workouts/create-workout"
                element={<CreateWorkout user={user} />}
              />
            </Routes>
          </div>
        ) : (
          <div className="flex flex-row">
            <Routes>
              <Route
                path="/login"
                element={
                  <Login handleNavigate={handleNavigate} setUser={setUser} />
                }
              />
              <Route
                path="/createuser"
                element={<SignIn handleNavigate={handleNavigate} />}
              />
            </Routes>
          </div>
        )}
      </div>
      <Analytics />
    </>
  );
}

export default App;
