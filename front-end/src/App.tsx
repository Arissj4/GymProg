import { BrowserRouter, useNavigate, Route, Routes } from 'react-router'
import './App.css'
import "./index.scss"
import MyWorkouts from './components/MyWorkouts'
import Home from './components/Home'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import type { User } from './model/User'
import PageHeader from './components/PageHeader'
import { useEffect, useState } from 'react'
import CreateWorkout from './components/CreateWorkout'
import SignIn from './components/SignIn'
import Profile from './components/Profile'


function App() {

  let [user, setUser] = useState<User>({id: 0, name: "MyProg", email: "", authenticated: false});

  useEffect(() => {
    async function checkUserLogin() {
      try {
        const res = await fetch("/api/auth/user");

        if (!res.ok) {
          handleNavigate("/Login");
          return;
        }

        const data = await res.json();

        console.log("------User-----");
        console.log(data);
        console.log("------User-----");

        setUser(data.user ?? data);
        handleNavigate("/");
      } catch (error) {
        console.error(error);
        handleNavigate("/Login");
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

        <div className='flex flex-row'>
          {user.authenticated ?
            <Sidebar user={user} handleNavigate={handleNavigate} pageSize={windowSize}/> :
            <div></div>
          }
          <Routes>
            <Route index element={<Home handleNavigate={handleNavigate} />} />
            <Route path="/login" element={<Login />} />
            <Route path='/createuser' element={<SignIn />} />
            <Route path="/profile" element={<Profile handleNavigate={handleNavigate}/>} />
            <Route path="/my-workouts" element={<MyWorkouts programs={['Program 1', 'Program 2', 'Program 3']} pageSize={windowSize} handleNavigate={handleNavigate}/>}/>
            <Route path='/my-workouts/create-workout' element={<CreateWorkout />}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
