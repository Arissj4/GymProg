import React from 'react'
import ButtonComponent from '../components/ButtonComponent';
import { useState } from 'react';
import type { ButtonModel } from '../model/Button';

type Props = {
  handleNavigate: (route: string) => void;
}


function Login ( props: Props) {

  function handleLoginClick(): void {
    console.log("Login button clicked");
  }

  const [button, setButton] = useState<ButtonModel>({
    text: "Login",
    type: "accept",
    clickEvent: handleLoginClick,
  });

  return (
    <div id='login' className='flex-auto h-full p-6 flex-col justify-center w-[70%]'>
      <div className='flex h-max'>
        <ButtonComponent model={button}/>
      </div>
    </div>
  )
}

export default Login