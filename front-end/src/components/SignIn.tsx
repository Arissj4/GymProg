import React, { use, useState } from 'react'

type Props = {}

type userInfo = {
  name: string,
  email: string,
}

const SignIn = (props: Props) => {

  const [user, setUser] = useState<userInfo>({
    name: '',
    email: '',
  })


  const handleSubmit = (e: any) =>{
    e.preventDefault;
    try{
      fetch(`/api/users/`, {
        method: "POST",
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(user),
      })
      .then(res => res.json())
      .then(data => console.log(data))
    } catch (error) {
      return;
    }
  }

  return (
    <div id='create-user' className='flex-auto h-full p-6 flex-col justify-center w-[70%]'>
      <div>
        <form>
          <input type='text' placeholder='Name' onChange={(e) => setUser({...user, name: e.target.value})}/>
          <input type='email' placeholder='Email' onChange={(e) => setUser({...user, email: e.target.value})}/>
          <button type='submit' onClick={(e) => handleSubmit(e)}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default SignIn