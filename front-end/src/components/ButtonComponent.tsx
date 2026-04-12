import React from 'react'
import type { ButtonModel } from "../model/Button";

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
    <div>
      <button
        onClick={props.model.clickEvent}
        className={getButtonType()}
        style={{ width: props.model.size }}
      >
        {props.model.text}
      </button>
    </div>
  )
}

export default ButtonComponent