import React from 'react'
import profilePic from '../../images/profile.jpg'

const CardStyle1 = ({className}) => {
  return (
    <div className={className}>
      <div className="upper-container">
        <div className="image-container">
          <img src={profilePic} alt="profile-pic"/>
        </div>
      </div>
      <div className="lower-container">
        <h3>John Doe</h3>
        <h4>Front-end Developer</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ducimus?</p>
        <a className="btn" href="">View Profile</a>
      </div>
    </div>
  )
}

export default CardStyle1