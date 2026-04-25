import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import type { User } from '../interfaces/User';
import type { ButtonModel } from '../interfaces/Button';
import ButtonComponent from '../components/ButtonComponent';

type Props = {
  setUser: (user: User) => void;
  handleNavigate: (route: string) => void;
}

const Profile = (props: Props) => {

  const logoutButton: ButtonModel = {
    text: "Logout",
    type: "white",
    style: { width: "120px" },
    clickEvent: () => {
      localStorage.removeItem("user");
      localStorage.setItem("user", JSON.stringify({id: 0, name: "MyProg", email: "", authenticated: false}));
      props.setUser({id: 0, name: "MyProg", email: "", authenticated: false});
      props.handleNavigate("/login");
    },
  }

  return (
    <div id='profile' className='flex-auto h-full p-6 flex-col justify-center w-[70%]'>

      <div className='flex flex-col'>

      </div>

      <div className='flex flex-col items-center mt-6'>
        <ButtonComponent model={logoutButton} />
      </div>
    </div>
  )
}

export default Profile