import React from 'react'
import type { ButtonModel } from "../model/Button";

type Props = {
  model: ButtonModel,
}

const ButtonComponent = (props: Props) => {

  const getButtonType = () => {
    switch (props.model.type){
      case "accept":
        return "border p-2 rounded-xl bg-orange-500 text-white hover:bg-orange-600 hover:cursor-pointer"
        break;
      case "cancel":
        return "border p-2 rounded-xl bg-orange-500 text-white hover:bg-orange-600 hover:cursor-pointer"
        break;
    }
  }

  return (
    <div>
      <button
        onClick={props.model.clickEvent}
        className='border p-2 rounded-xl bg-white text-gray-500 hover:bg-gray-100 hover:cursor-pointer'
      >
        {props.model.text}
      </button>
    </div>
  )
}

export default ButtonComponent