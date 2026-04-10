import React from 'react'

type Props = {}

function CreateWorkout(props: Props) {
  return (
    <div id='create-workout' className='flex-auto h-full p-6 flex-col justify-center w-[70%]'>
      <div>
        <span className='text-[24px] font-[1000] text-orange-500 block w-full h-fit text-center'>
          Create Workout Plan
        </span>
      </div>
    </div>
  )
}

export default CreateWorkout