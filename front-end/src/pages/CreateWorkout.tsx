import { Button } from '@mui/material'
import React from 'react'
import WorkoutsController from '../controllers/WorkoutsController';
import type { Workout } from '../interfaces/Workout';
import type { User } from '../interfaces/User';

type Props = {
  user: User;
}

function CreateWorkout(props: Props) {

  async function newWorkout(){
    try {
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
      <div>
        <span className='text-[24px] font-[1000] text-orange-500 block w-full h-fit text-center'>
          Create Workout Plan
        </span>
      </div>

      <Button onClick={() => newWorkout()}>
        Create Workout
      </Button>
    </div>
  )
}

export default CreateWorkout