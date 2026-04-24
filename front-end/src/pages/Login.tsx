import React, { useEffect } from 'react'
import ButtonComponent from '../components/ButtonComponent';
import { useState } from 'react';
import type { ButtonModel } from '../interfaces/Button';
import type { Authentication } from '../interfaces/AuthenticationInterface';
import AuthenticationController from '../controllers/AuthenticationController';
import { FormControl, TextField, Link, Alert, Backdrop, CircularProgress } from '@mui/material';
import ErrorComponent from '../components/ErrorComponent';
import LoadComponent from '../components/LoadComponent';


type Props = {
  handleNavigate: (route: string) => void;
}


function Login ( props: Props) {

  // Variables Section
  const [pageLoading, setPageLoading] = useState<Boolean>(false);
  const [pageError, setPageError] = useState<Boolean>(false);

  const [loginStatus, setLoginStatus] = useState<Boolean>(false);
  const [showLoginErrorAlert, setShowLoginErrorAlert] = useState<Boolean>(false);
  const [loginInfo, setLoginInfo] = useState<Authentication>({email: "", password: ""});

  async function handleLoginClick(): Promise<void> {
    try{
      setPageLoading(true);
      const user = await AuthenticationController.handleLogin(loginInfo);
      if(user?.error){
        setLoginStatus(true);
        setShowLoginErrorAlert(true);
      } else{
        localStorage.setItem("user", JSON.stringify(user));
        props.handleNavigate("/");
      }
    } catch (error) {
      setPageError(true);
    } finally {
      setPageLoading(false);
    }

  }

  /* useEffect(() => {
    if(loginStatus){
      const timer = setTimeout(() => {
        setLoginStatus(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [loginStatus]); */

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

          {pageLoading ? <LoadComponent /> : null}

          {pageError ?
            <ErrorComponent
              text='An error occurred while logging in. Please try again later.'
              activated={pageError}
              onClose={() => setPageError(false)}
            />
          : null}

          {showLoginErrorAlert ?
            <Alert
              severity="error"
              onClose = {() => setShowLoginErrorAlert(false)}
              className={`mb-4 ${showLoginErrorAlert ? "flex" : "hidden"}`}
            >
              Invalid email or password
            </Alert>
          : null}

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