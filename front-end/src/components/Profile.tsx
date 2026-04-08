import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

type Props = {
  handleNavigate: (route: string) => void;
}

const Profile = (props: Props) => {
  return (
    <div id='profile' className='flex-auto h-full p-6 flex-col justify-center w-[70%]'>
      <div className='flex flex-col items-center mt-6'>
        <button
          onClick={() => {props.handleNavigate('/createuser')}}
          className='border p-2 rounded-xl bg-orange-500 text-white hover:bg-orange-600 hover:cursor-pointer'
        >
          <FontAwesomeIcon icon={faPlus} className='mr-1.5'/>
          Create a new user
        </button>
      </div>
    </div>
  )
}

export default Profile