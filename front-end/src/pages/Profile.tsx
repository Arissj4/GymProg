import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { use, useState } from 'react'
import type { User } from '../interfaces/User';
import type { ButtonModel } from '../interfaces/Button';
import ButtonComponent from '../components/ButtonComponent';
import ErrorComponent from '../components/ErrorComponent';
import LoadComponent from '../components/LoadComponent';
import AuthenticationController from '../controllers/AuthenticationController';
import { Alert } from '@mui/material';

type Props = {
  setUser: (user: User) => void;
  handleNavigate: (route: string) => void;
}

const Profile = (props: Props) => {

  const [pageLoading, setPageLoading] = useState<Boolean>(false);
  const [pageError, setPageError] = useState<Boolean>(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState<Boolean>(false);

  const logoutButton: ButtonModel = {
    text: "Logout",
    type: "white",
    style: { width: "120px" },
    clickEvent: async () => {
      try{
        setPageLoading(true);
        await AuthenticationController.handleLogout();
        localStorage.removeItem("user");
        localStorage.setItem("user", JSON.stringify({id: 0, name: "MyProg", email: "", authenticated: false}));
        props.setUser({id: 0, name: "MyProg", email: "", authenticated: false});
        props.handleNavigate("/login");
      } catch (error) {
        setPageError(true);
      } finally {
        setPageLoading(false);
      }
    },
  }

  return (
    <div id='profile' className='flex-auto h-full p-6 flex-col justify-center w-[70%]'>

      {pageLoading ?
        <LoadComponent />
      : null}

      {pageError ?
        <ErrorComponent
          text='An error occurred while logging in. Please try again later.'
          activated={pageError}
          onClose={() => setPageError(false)}
        />
      : null}

      {/* {showSuccessMessage ?
        <Alert>
          Logged out successfully! Redirecting to login...
        </Alert>
      : null} */}

      <div className='flex flex-col'>

      </div>

      <div className='flex flex-col items-center mt-6'>
        <ButtonComponent model={logoutButton} />
      </div>
    </div>
  )
}

export default Profile