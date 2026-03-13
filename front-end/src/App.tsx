import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import "./index.scss"
import UserExercisePrograms from './components/UserExercisePrograms'
import Home from './components/Home'
import Login from './components/Login'
import Sidebar from './components/Sidebar'


function App() {


  function handleNavigate(route: string): void{
    console.log(route);
  }
  
  return (
    <>
      <div id="wrapper" className='rounded-xl'>
        <Sidebar userFullName='Soheil Jamshidi' handleNavigate={handleNavigate}/>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user-exercise-programs" element={<UserExercisePrograms programs={['Program 1', 'Program 2', 'Program 3']} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
