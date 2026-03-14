import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import "./index.scss"
import UserExercisePrograms from './components/UserExercisePrograms'
import Home from './components/Home'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import type { User } from './model/User'
import PageHeader from './components/PageHeader'


function App() {

  const testUser: User = {
    id: 1,
    name: 'Soheil',
    email: "Soheil@gmail.com",
    password: "password",
    image: null,
  }

  function handleNavigate(route: string): void{
    console.log(route);
  }
  
  return (
    <>
      <div id="wrapper" className='rounded-[30px]'>
        <div>
          <PageHeader user={testUser} handleNavigate={handleNavigate}/>
        </div>

        <div className='flex flex-row'>
          <Sidebar user={testUser} handleNavigate={handleNavigate}/>
          <BrowserRouter>
            <Routes>
              <Route index element={<Home handleNavigate={handleNavigate} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/my-workouts" element={<UserExercisePrograms programs={['Program 1', 'Program 2', 'Program 3']} />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  )
}

export default App
