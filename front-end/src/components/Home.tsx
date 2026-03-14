import React from 'react'

type Props = {
  handleNavigate: (route: string) => void;
}

const Home = (props: Props) => {
  return (
    <div id="home" className='flex-auto h-full p-6 flex-col justify-center w-[70%]'>
      <div>
        <span className='text-[24px] font-[1000] block w-full h-fit text-center'>
          Welcome to
          <span className='text-orange-500'> G</span>
          <span>ym</span>
          <span className='text-orange-500'>P</span>
          <span>rog</span>
        </span>
      </div>

      <div className='flex flex-col items-center'>
        <span className='text-[20px] font-bold block w-full h-fit text-center mt-10'>
          Create your workout programs
        </span>

        <button
          onClick={() => props.handleNavigate('/my-workouts')}
          className='border p-2 rounded-xl mt-4 bg-orange-500 text-white hover:bg-orange-600 hover:cursor-pointer'
        >
          Create Workout Program
        </button>
      </div>

    </div>
  )
}

export default Home