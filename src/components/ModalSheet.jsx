import React,{useContext} from 'react'
import { ModalContext } from '../context/Modal'
import {Delete} from './Svg'
const ModalSheet = ({sheetName,propertiesNumber}) => {
  
  const {removeSheet,updateSheet} = useContext(ModalContext)

  return (
    <div className='modal-sheet'>
      <p onClick={()=>updateSheet(sheetName)}>{sheetName}</p>
      <p>{propertiesNumber}</p>
      <Delete onClick={()=>removeSheet(sheetName)}/>
    </div>
  )
}

export default ModalSheet
