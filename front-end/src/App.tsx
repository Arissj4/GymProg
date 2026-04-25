import { BrowserRouter, useNavigate, Route, Routes, Router, useLoaderData, useLocation } from 'react-router'
import './App.css'
import "./index.scss"
import AuthenticationController from './controllers/AuthenticationController'
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


function App() {

  let [user, setUser] = useState<User>({id: 0, name: "MyProg", email: "", authenticated: false});
  let checkedLogin = useRef<Boolean>(false);
  const location = useLocation();

  useEffect(() => {
    async function checkUserLogin() {
      try {
        console.log(user)
        if(localStorage.getItem("user")) return;

        const currentPath = location?.pathname;

        if(location.pathname === "/createuser" || location.pathname === "/login"){
          return;
        }

        if (checkedLogin.current) return;
        checkedLogin.current = true;

        const userData = await AuthenticationController.checkUser();

        if(!userData.error) {
          setUser({id: userData.id, name: userData.name, email: userData.email, authenticated: true});
        }

        if (!user.authenticated && currentPath !== "/login" && currentPath !== "/createuser") {
          handleNavigate("/login");
        } else if (user.authenticated && (currentPath === "/login" || currentPath === "/createuser")) {
          handleNavigate("/");
        }
      } catch (error) {
        console.error(error);
        handleNavigate("/login");
      }
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
      <div id="wrapper" className='rounded-[30px]'>
        <div>
          <PageHeader user={user} handleNavigate={handleNavigate}/>
        </div>

        {user.authenticated ?
          <div className='flex flex-row'>
            <Sidebar user={user} setUser={setUser} handleNavigate={handleNavigate} pageSize={windowSize}/>
            <Routes>
              <Route index element={<Home handleNavigate={handleNavigate} />} />
              <Route path="/profile" element={<Profile handleNavigate={handleNavigate}/>} />
              <Route path="/my-workouts" element={<MyWorkouts programs={['Program 1', 'Program 2', 'Program 3']} pageSize={windowSize} handleNavigate={handleNavigate}/>}/>
              <Route path='/my-workouts/create-workout' element={<CreateWorkout />}/>
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
    </>
  )
}

export default App
