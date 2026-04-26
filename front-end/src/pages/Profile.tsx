import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { use, useState } from 'react'
import type { User } from '../interfaces/User';
import type { ButtonModel } from '../interfaces/Button';
import ButtonComponent from '../components/ButtonComponent';
import ErrorComponent from '../components/ErrorComponent';
import LoadComponent from '../components/LoadComponent';
import AuthenticationController from '../controllers/AuthenticationController';
import { Alert, Divider } from '@mui/material';

type Props = {
  user: User;
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
    <div id='profile' className='flex flex-auto h-full p-6 flex-col justify-center w-[70%]'>

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

      <div className='flex flex-col flex-1'>
        <div>
          <header>
            <h1 className='text-2xl font-bold'>
              Profile
            </h1>
            <Divider variant='fullWidth' />
          </header>

          <section className='mt-4 text-2'>
            <div className='grid grid-cols-[60px_auto] gap-2 mb-2 pl-2'>
              <div className='font-bold'>
                Name:
              </div>
              <div>
                {props.user.name}
              </div>
            </div>

            <div className='grid grid-cols-[60px_auto] gap-2 mb-2 pl-2'>
              <div className='font-bold'>
                Email:
              </div>
              <div>
                {props.user.email}
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className='flex flex-col h-fit items-center mt-6'>
        <ButtonComponent model={logoutButton} />
      </div>
    </div>
  )
}

export default Profile