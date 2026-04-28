import React from 'react'
import type { ButtonModel } from "../interfaces/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

type Props = {
  model: ButtonModel,
}

const ButtonComponent = (props: Props) => {

  const getButtonType = () => {
    switch (props.model.type){
      case "orange":
        return `border p-2 rounded-xl bg-orange-500 text-white hover:bg-orange-600 hover:cursor-pointer`
        break;
      case "white":
        return `border border-[#d4d4d8] p-2 rounded-xl bg-white text-[#454856] hover:bg-gray-100/70 hover:cursor-pointer`
        break;
    }
  }

  return (
    <div className='flex w-full justify-center items-center'>
      <button
        type='button'
        onClick={props.model.clickEvent}
        className={getButtonType()}
        style={props.model.style}
      >
        {props.model.icon && <FontAwesomeIcon icon={props.model.icon}  className="mr-1"/>}
        {props.model.text}
      </button>
    </div>
  )
}

export default ButtonComponent