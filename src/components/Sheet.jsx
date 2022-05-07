import React,{useState,useContext} from 'react'
import { ModalContext } from '../context/Modal'
import {Copy,ExpandMore,ExpandLess,Remove} from './Svg'


const Sheet = ({sheet}) => {

  const [show, setshow] = useState(false)
  const {name,properties} = sheet
  const{removeFromSheet} = useContext(ModalContext)

  const toggleInfo=()=>{
    setshow(!show)
  }

  return (
    <div className='sheet'>
      <div onClick={toggleInfo} className="head">
        <h4>{name}</h4>
        {show ? <ExpandLess/> : <ExpandMore/>}
      </div>
      {
      show
      &&
      <div className='css-code'>
        {
        properties.map(property=>{
            
            return <div className="prop">
                    <code>{property}</code>
                    <Remove onClick={()=>removeFromSheet(name,property)}/>    
                   </div> 
          })
        }
        <Copy text={properties.flat().join('\n')}/>
      </div>
      }
    </div>
  )
}

export default Sheet