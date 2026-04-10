import React from 'react'
import ButtonComponent from '../components/ButtonComponent';
import { useState } from 'react';
import type { ButtonModel } from '../model/Button';

type Props = {
  handleNavigate: (route: string) => void;
}


function Login ( props: Props) {

  // Variables Section
  const [loginButton, setLoginButton] = useState<ButtonModel>({
    text: "Login",
    type: "orange",
    size: "200px",
    clickEvent: handleLoginClick,
  });

  const [registerButton, setRegisterButton] = useState<ButtonModel>({
    text: "Register",
    type: "white",
    size: "200px",
    clickEvent: handleRegisterClick,
  })

  // Functions Section
  function handleLoginClick(): void {
    console.log("Login button clicked");
  }

  function handleRegisterClick(): void {
    console.log("Register button clicked");
  }

  // Hooks Section

  return (
    <div id='login' className='flex-auto h-full p-6 flex-col justify-center w-[70%]'>
      <div className='flex h-max'>
        <ButtonComponent model={loginButton}/>
        <ButtonComponent model={registerButton}/>
      </div>
    </div>
  )
}

export default Login