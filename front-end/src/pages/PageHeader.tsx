import React from 'react'
import { getUserFullName, type User } from '../interfaces/User'

type Props = {
  user: User,
  handleNavigate: (route: string) => void,
}

function PageHeader (props: Props) {
  return (
    <div
    id='page-header'
    className='border-b border-solid border-section-border-gray px-6 py-3 h-15'
    >
      <span className='text-[30px] font-[1000] text-orange-500'>
        {props.user?.name?.slice(0, 1).toUpperCase()}
      </span>
      <span className='text-[30px] font-[1000]'>
      {props.user?.name?.slice(1).toUpperCase()}
      </span>
    </div>
  )
}

export default PageHeader;