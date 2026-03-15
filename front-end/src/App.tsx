import { BrowserRouter, useNavigate, Route, Routes } from 'react-router'
import './App.css'
import "./index.scss"
import MyWrokouts from './components/MyWorkouts'
import Home from './components/Home'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import type { User } from './model/User'
import PageHeader from './components/PageHeader'
import { useEffect, useState } from 'react'


function App() {

  let navigate = useNavigate();
  let [windowSize, setWindowSize] = useState(window.innerWidth);


  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  const testUser: User = {
    id: 1,
    name: 'Soheil',
    email: "Soheil@gmail.com",
    password: "password",
    image: null,
  }

  function handleNavigate(route: string): void{
    console.log(route);
    navigate(route);
  }

  return (
    <>
      <div id="wrapper" className='rounded-[30px]'>
        <div>
          <PageHeader user={testUser} handleNavigate={handleNavigate}/>
        </div>

        <div className='flex flex-row'>
          <Sidebar user={testUser} handleNavigate={handleNavigate} pageSize={windowSize}/>
          <Routes>
            <Route index element={<Home handleNavigate={handleNavigate} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/my-workouts" element={<MyWrokouts programs={['Program 1', 'Program 2', 'Program 3']} pageSize={windowSize} />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
