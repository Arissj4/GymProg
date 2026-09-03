import { useNavigate, Route, Routes, useLocation } from 'react-router'
import './App.css'
import "./index.scss"
import MyWorkouts from './pages/MyWorkouts'
import Home from './pages/Home'
import Login from './pages/Login'
import Sidebar from './pages/Sidebar'
import type { User } from './interfaces/User'
import PageHeader from './pages/PageHeader'
import { useEffect, useRef, useState } from 'react'
import CreateWorkout from './pages/CreateWorkout'
import SignIn from './pages/SignIn'
import Profile from './pages/Profile'
import { Analytics } from '@vercel/analytics/react'


function App() {

  const [user, setUser] = useState<User>(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      try {
        const parsed = JSON.parse(savedUser);
        if (parsed.authenticated) {
          return parsed;
        } else if (parsed.user && parsed.user.authenticated) {
          return parsed.user;
        }
      } catch (e) {
        console.error("Failed to parse user from local storage", e);
      }
    }
    return {id: 0, name: "MyProg", email: "", authenticated: false};
  });
  const checkedLogin = useRef<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    async function checkUserLogin() {
      if(user.authenticated) return;

      if(location.pathname === "/createuser" || location.pathname === "/login")return;

      if (checkedLogin.current) return;
      checkedLogin.current = true;

      handleNavigate("/login");
    }

    checkUserLogin();
  }, []);


  let navigate = useNavigate();
  let [windowSize, setWindowSize] = useState(window.innerWidth);


  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener("resize", handleResize);
  }, [])


  function handleNavigate(route: string): void{
    navigate(route);
  }

  return (
    <>
      <div id="wrapper" className='lg:rounded-[30px]'>
        <div>
          <PageHeader user={user} handleNavigate={handleNavigate}/>
        </div>

        {user.authenticated ?
          <div className='flex flex-row'>
            <Sidebar user={user} setUser={setUser} handleNavigate={handleNavigate} pageSize={windowSize}/>
            <Routes>
              <Route index element={<Home handleNavigate={handleNavigate} />} />
              <Route path="/profile" element={<Profile handleNavigate={handleNavigate} setUser={setUser} user={user}/>} />
              <Route path="/my-workouts" element={<MyWorkouts programs={['Program 1', 'Program 2', 'Program 3']} pageSize={windowSize} handleNavigate={handleNavigate}/>}/>
              <Route path='/my-workouts/create-workout' element={<CreateWorkout user={user}/>}/>
            </Routes>
          </div> :
          <div className='flex flex-row'>
            <Routes>
              <Route path="/login" element={<Login handleNavigate={handleNavigate} setUser={setUser} />} />
              <Route path='/createuser' element={<SignIn handleNavigate={handleNavigate}/>} />
            </Routes>
          </div>
        }
      </div>
      <Analytics />
    </>
  )
}

export default App
