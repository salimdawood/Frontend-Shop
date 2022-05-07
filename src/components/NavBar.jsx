import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {Hamburger,Close} from './Svg.jsx'

const NavBar = () => {
  const [isOpen,setIsOpen] = useState(false)
  const toggleNav = ()=>{
    setIsOpen(!isOpen)
  }


  return (
    <nav>
      <div className="nav-logo">
        <h4>
          <Link to="/">Front-end Shop</Link>
        </h4>
      </div>
      <div className={isOpen?"nav-link":"nav-link nav-mobile"}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/mysheets">MySheets</Link>
          </li>
          <li>
            <Link to="/mycss">MyCss</Link>
          </li>
          <li>
            <Link to="/upcoming">Upcoming</Link>
          </li>
        </ul>
      </div>
      <div onClick={toggleNav} className="nav-burger">
        {isOpen?<Close/> : <Hamburger/>}
      </div>
    </nav>
  )
}

export default NavBar
