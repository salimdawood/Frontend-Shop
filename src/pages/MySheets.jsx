import React,{useContext} from 'react'
import Sheet from '../components/Sheet'
import { ModalContext } from '../context/Modal'

const MySheets = () =>{
  const {sheetArray} = useContext(ModalContext)
  const sheets = sheetArray()

  return (
    <div className='sheets'>
      {
        sheets.map(sheet=>{
          return <Sheet key={sheet.name} sheet={sheet}/>
        })
      }
    </div>
  )
}

export default MySheets