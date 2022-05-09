import React from 'react'
import profilePic from '../../images/profile.jpg'
import {Facebook,Twitter,Instagram} from '../Svg'

const CardStyle4 = ({className}) => {
  return (
    <div className={className}>
      <div className="upper-container">
        <div className="media-container">
          <Facebook/>
          <Instagram/>
          <Twitter/>
        </div>
        <div className="image-container">
          <img src={profilePic} alt="profile-pic"/>
        </div>
      </div>
      <div className="lower-container">
        <h3>John Doe</h3>
        <h4>Front-end Developer</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ducimus?</p>
        <button className="btn">View Profile</button>
      </div>
    </div>
  )
}

export default CardStyle4