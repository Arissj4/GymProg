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

  const [activeButton, setActiveButton] = useState<number>(0);

  function selectWorkoutDay (btnNumber: number): void {
    setActiveButton(btnNumber);
    let btn = document.getElementById(btnNumber.toString());
    if(btn){
      btn.style.backgroundColor = "lightskyblue";
      btn.style.color = "white";
      for (let i = 0; i < days; i++) {
        if (i !== btnNumber) {
          document.getElementById(i.toString())?.style.removeProperty("background-color");
          document.getElementById(i.toString())?.style.removeProperty("color");
        }
      }
    }
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

          <div className='flex justify-center overflow-scroll'>
            <ButtonGroup className='w-full'>
              {Array.from({ length: days}).map((_, index) => {
                return <Button
                          key={index}
                          id={index.toString()}
                          onClick={() => {selectWorkoutDay(index)}}
                        >
                          Day {index + 1}
                        </Button>
              })}
            </ButtonGroup>
          </div>
        </div>


      </form>

      <Button onClick={() => newWorkout()} className='bg-orange-500 text-white mt-4'>
        Create Workout
      </Button>
    </div>
  )
}

export default CreateWorkout