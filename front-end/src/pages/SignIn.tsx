import { FormControl, Link, TextField } from '@mui/material'
import React, { use, useState } from 'react'
import type { ButtonModel } from '../interfaces/Button'
import ButtonComponent from '../components/ButtonComponent'
import AuthenticationController from '../controllers/AuthenticationController'
import type { Authentication } from '../interfaces/AuthenticationInterface'

type Props = {
  handleNavigate: (route: string) => void;
}

type userInfo = {
  name: string,
  email: string,
  password: string,
}

const SignIn = (props: Props) => {

  const [signinInfo, setSigninInfo] = useState<userInfo>({
    name: '',
    email: '',
    password: '',
  })

  const handleRegisterClick = async (): Promise<void> => {
    try {
      const status = await AuthenticationController.handleRegister(signinInfo);
      if(status && status?.user){
        alert("User registered successfully");
        props.handleNavigate("/login");
      } else if(status && status?.error === "User already exists"){
        alert("User already exists");
      } else {
        alert("An error occurred while registering");
      }
    } catch (error) {
      console.error("Error occurred while registering:", error);
      alert("An error occurred while registering");
    }
  }

  const registerButton: ButtonModel = {
    text: "Register",
    type: "white",
    style: { width: "220px" },
    clickEvent: () => handleRegisterClick(),
  }

  return (
    <div id='create-user' className='flex-auto h-full p-6 flex-col justify-center w-[70%]'>
      <div className='flex-auto justify-center h-max'>
        <div className='mb-4 flex flex-col items-center justify-center'>

          <FormControl
            className='flex items-center justify-between w-5/10 m-1'
            variant='outlined'
          >

            <TextField
              className='costume-input w-7/10 border my-4!'
              id="outlined-required"
              label="Name"
              type="text"
              value={signinInfo?.name}
              onChange={(e) => setSigninInfo({...signinInfo, name: e.target.value})}
            />

            <TextField
              className='costume-input w-7/10 border my-4!'
              id="outlined-required"
              label="Email"
              type="email"
              value={signinInfo?.email}
              onChange={(e) => setSigninInfo({...signinInfo, email: e.target.value})}
            />

            <TextField
              className='costume-input w-7/10 border mt-4! mb-2!'
              id="outlined-required"
              label="Password"
              type="password"
              value={signinInfo.password}
              onChange={(e) => setSigninInfo({...signinInfo, password: e.target.value})}
            />
          </FormControl>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <ButtonComponent model={registerButton}/>
        </div>
      </div>
    </div>
  )
}

export default SignIn