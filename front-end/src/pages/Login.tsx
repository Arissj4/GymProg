import React from 'react'
import ButtonComponent from '../components/ButtonComponent';
import { useState } from 'react';
import type { ButtonModel } from '../interfaces/Button';
import * as LoginController from '../controllers/LoginController';

type Props = {
  handleNavigate: (route: string) => void;
}


function Login ( props: Props) {

  // Variables Section
  const [loginButton, setLoginButton] = useState<ButtonModel>({
    text: "Login",
    type: "orange",
    size: "200px",
    clickEvent: () => LoginController.handleLoginClick({email: "", password: ""}),
  });

  const [registerButton, setRegisterButton] = useState<ButtonModel>({
    text: "Register",
    type: "white",
    size: "200px",
    clickEvent: () => LoginController.handleRegisterClick(),
  })

  // Hooks Section

  return (
    <div id='login' className='flex-auto h-full p-6 flex-col justify-center w-[70%]'>
      <div className='flex-auto justify-center h-max'>
        <div className='mb-4'>

          <form className='flex flex-col items-center justify-center'>
            <div className='flex items-center justify-between w-5/10 m-1'>
              <label className='h-fit w-2/10 items-center' htmlFor='email'>
                Email:
              </label>

              <input className='w-7/10 p-1 rounded-md bg-transparent border border-gray-400 hover:border-gray-500 focus:outline-none'
              type='email'
              id='name'
              placeholder='Email' />
            </div>

            <div className='flex items-center justify-between w-5/10 m-1'>
              <label className='h-fit w-2/10' htmlFor='password'>
                Password:
              </label>
              <input className='w-7/10 p-1 rounded-md bg-transparent border border-gray-400 hover:border-gray-500 focus:outline-none'
                type='password'
                name='password'
                placeholder='Password' />
            </div>

            <div className='flex items-center justify-between w-5/10 m-1'>
              <span>
                Do not have an account?
              </span>
            </div>

          </form>
        </div>

        <div className='flex justify-center bg-amber-800'>
          <ButtonComponent model={loginButton}/>
          <ButtonComponent model={registerButton}/>
        </div>
      </div>
    </div>
  )
}

export default Login