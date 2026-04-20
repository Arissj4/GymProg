import React from 'react'
import ButtonComponent from '../components/ButtonComponent';
import { useState } from 'react';
import type { ButtonModel } from '../interfaces/Button';
import type { Authentication } from '../interfaces/AuthenticationInterface';
import * as LoginController from '../controllers/LoginController';
import { FormControl, TextField, Link } from '@mui/material';


type Props = {
  handleNavigate: (route: string) => void;
}


function Login ( props: Props) {

  // Variables Section
  const [loginStatus, setLoginStatus] = useState<Boolean>(false);
  const [loginInfo, setLoginInfo] = useState<Authentication>({email: "", password: ""});

  async function handleLoginClick(): Promise<void> {
    const user = await LoginController.handleLogin(loginInfo);
    console.log(user)
    /* if(user === 200){
      localStorage.setItem("user", JSON.stringify(user));
      props.handleNavigate("/");
    } else if(user === 401){
      setLoginStatus(true);
    } else {
      alert("An error occurred while logging in");
    } */
  }

  const loginButton: ButtonModel = {
    text: "Login",
    type: "orange",
    style: { width: "220px", marginBottom: "10px" },
    clickEvent: () => handleLoginClick(),
  };

  const registerButton: ButtonModel = {
    text: "Register",
    type: "white",
    style: { width: "220px" },
    clickEvent: () => props.handleNavigate("/createuser"),
  }

  return (
    <div id='login' className='flex-auto h-full p-6 flex-col justify-center w-[70%]'>
      <div className='flex-auto justify-center h-max'>
        <div className='mb-4 flex flex-col items-center justify-center'>

          <FormControl
            className='flex items-center justify-between w-5/10 m-1'
            error={loginStatus}
            variant='outlined'
          >
            <TextField
              className='costume-input w-7/10 border my-4!'
              id="outlined-required"
              label="Email"
              type="email"
              error={loginStatus}
              value={loginInfo?.email}
              onChange={(e) => setLoginInfo({...loginInfo, email: e.target.value})}
            />

            <TextField
              className='costume-input w-7/10 border mt-4! mb-2!'
              id="outlined-required"
              label="Password"
              type="password"
              error={loginStatus}
              value={loginInfo.password}
              onChange={(e) => setLoginInfo({...loginInfo, password: e.target.value})}
            />

            <div className='flex items-center justify-between w-7/10 m-1'>
              <Link href='/createuser' underline='none' className='text-sm! text-gray-500!'>
                Do not have an account?
              </Link>
            </div>
          </FormControl>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <ButtonComponent model={loginButton}/>
          <ButtonComponent model={registerButton}/>
        </div>
      </div>
    </div>
  )
}

export default Login