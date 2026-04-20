import { FormControl, Link, TextField } from '@mui/material'
import React, { use, useState } from 'react'
import type { ButtonModel } from '../interfaces/Button'
import ButtonComponent from '../components/ButtonComponent'
import * as SignInController from '../controllers/SignInController'
import type { Authentication } from '../interfaces/AuthenticationInterface'

type Props = {}

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

  const registerButton: ButtonModel = {
    text: "Register",
    type: "white",
    style: { width: "220px" },
    clickEvent: () => SignInController.handleRegister(signinInfo),
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

            <div className='flex items-center justify-between w-7/10 m-1'>
              <Link href='/createuser' underline='none' className='text-sm! text-gray-500!'>
                Do not have an account?
              </Link>
            </div>
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