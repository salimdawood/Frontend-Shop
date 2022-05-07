import React from 'react'
import {Delete} from '../Svg'

const ButtonStyle1 = ({className}) => {
  return (
    <button type="button" className={className}>
      <span className="txt">Delete</span>
      <span className="icon"><Delete/></span>
    </button>
  )
}

export default ButtonStyle1