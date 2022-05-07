import React from 'react'
import profilePic from '../../images/profile.jpg'
import {Facebook,Twitter,Instagram} from '../Svg'


const CardStyle3 = ({className}) => {
  return (
    <div className={className}>
      <div className="cover-container">
        <div className="image-container">
          <img src={profilePic} alt="profile-pic"/>
        </div>
      </div>
      <div className="lower-container">
        <h3 className="fcbk-style">John Doe</h3>
        <h4>Front-end Developer</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ducimus?</p>
        <div className="btn-container">
          <button className="btn-filled">Message</button>
          <button className="btn-clicked">Following</button>
        </div>
        <div className="media-container">
          <Facebook/>
          <Instagram/>
          <Twitter/>
        </div>
      </div>
    </div>
  )
}

export default CardStyle3