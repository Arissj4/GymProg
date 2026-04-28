import { Button, ButtonGroup } from '@mui/material'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import WorkoutsController from '../controllers/WorkoutsController';
import type { Workout } from '../interfaces/Workout';
import type { User } from '../interfaces/User';
import ButtonComponent from '../components/ButtonComponent';
import type { ButtonModel } from '../interfaces/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

type Props = {
  user: User;
}

function CreateWorkout(props: Props) {

  const [days, setDays] = useState<number>(0);


  const addDayButton: ButtonModel = {
    text: "Add Day",
    type: "orange",
    icon: faPlus,
    clickEvent: () => { if(days < 7)setDays(prev => prev + 1); }
  }

  async function newWorkout(){
    try {
      return;
      let payload: Workout ={
        title: "test",
        exercises: [
          {
            name: "Bench Press",
            day: 1,
            sets: 3,
            reps: 10,
            rest: 60,
            note: "Warm up with light weight"
          },
          {
            name: "Squats",
            day: 2,
            sets: 3,
            reps: 10,
            rest: 60,
            note: "Warm up with light weight"
          },

        ]
      }
      const res = await WorkoutsController.handleCreateWorkout(payload);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div id='create-workout' className='flex-auto h-full p-6 flex-col justify-center w-[70%]'>
      <div className='mb-6'>
        <span className='text-[24px] font-[1000] text-orange-500 block w-full h-fit text-center'>
          Create Workout Plan
        </span>
      </div>

      <form className=''>
        <div>
          <div className='flex min-w-fit mb-4'>
            <ButtonComponent model={addDayButton} />
          </div>

          <div className='flex justify-center'>
            <ButtonGroup>
              {Array.from({ length: days}).map((_, index) => <Button key={index}>Day {index + 1}</Button>)}
            </ButtonGroup>
          </div>
        </div>
      </form>

      <Button onClick={() => newWorkout()}>
        Create Workout
      </Button>
    </div>
  )
}

export default CreateWorkout