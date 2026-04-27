import React, { useEffect, useRef, useState, type ReactElement } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import LoadComponent from '../components/LoadComponent';
import ErrorComponent from '../components/ErrorComponent';
import WorkoutsController from '../controllers/WorkoutsController';

type pageProps = {
  programs: string[],
  pageSize: number,
  handleNavigate: (route: string) => void,
}

function MyWorkouts (props: pageProps): ReactElement {

  const [pageLoading, setPageLoading] = useState<Boolean>(false);
  const [pageError, setPageError] = useState<Boolean>(false);

  const [workouts, setWorkouts] = useState<object>([]);
  let workoutsLoaded = useRef<Boolean>(false);


  useEffect(() => {
    async function getWorkouts() {
      if(workoutsLoaded.current) return;
      try{
        setPageLoading(true);
        workoutsLoaded.current = true;
        const res = await WorkoutsController.getWorkouts();
        setWorkouts(res);
      } catch (error) {
        setPageError(true);
      } finally {
        setPageLoading(false);
      }
    }

    getWorkouts();
  }, []);

  return (
    <div id="my-workouts" className='flex-auto h-full p-6 flex-col justify-center w-[70%]'>

      {pageLoading ?
        <LoadComponent />
      : null}

      {pageError ?
        <ErrorComponent
          text='An error occurred while loading your workout plans. Please try again later.'
          activated={pageError}
          onClose={() => setPageError(false)}
        />
      : null}

      <div>
        <span className='text-[24px] font-[1000] text-orange-500 block w-full h-fit text-center'>
          My Workout Plans
        </span>
      </div>

      <div className='flex flex-col items-center mt-6'>
        <button
          onClick={() => {props.handleNavigate('/my-workouts/create-workout')}}
          className='border p-2 rounded-xl bg-orange-500 text-white hover:bg-orange-600 hover:cursor-pointer'
        >
          <FontAwesomeIcon icon={faPlus} className='mr-1.5'/>
          Create new workout plan
        </button>
      </div>
    </div>
  )
}

export default MyWorkouts