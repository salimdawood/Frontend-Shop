import React,{useContext} from 'react'
import { SideBarContext } from '../context/SideBarState'

const Button = () => {

  const {showSideBar} = useContext(SideBarContext)

  return (
    <button className="btn-src" onClick={(e)=>showSideBar(e)} type="button">Get src code</button>
  )
}

export default Button