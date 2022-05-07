import React,{useContext,useState} from 'react'
import reactDom from 'react-dom'
import {Close,Add} from '../components/Svg'
import { ModalContext } from '../context/Modal'
import ModalSheet from '../components/ModalSheet'

const Modal = () => {

  const [sheet,setSheet] = useState('')
  const {modalIsOpen,toggleModal,getSheets,addSheet} = useContext(ModalContext)
  const sheets = getSheets()

  //handle empty name
  const handleAdd = (sheetName) =>{
    setSheet('')
    addSheet(sheetName)
  }

  return (modalIsOpen && reactDom.createPortal(
    <div className='modal'>
      <div className="modal-form">
          <Close onClick={toggleModal}/>
          <div className="modal-sheets">
            {
            sheets.map((sheet)=>{
              return <ModalSheet sheetName={sheet.name} propertiesNumber={sheet.number} key={sheet.name}/>
            })
            }
          </div>
          <div className="sheet-add">
            <input type="text" onChange={(e)=>setSheet(e.target.value)} value={sheet} placeholder="Enter sheet name"/>
            <button onClick={()=>handleAdd(sheet)}>
              <p>New Sheet</p>
              <Add/>
            </button>
          </div>
      </div>
    </div>
  ,document.getElementById('modal')))
}

export default Modal
