import React from 'react'
import { Facebook,Twitter,Instagram } from '../Svg'

const FooterStyle2 = ({className}) => {
  return (
    <div className={className}>
      <h2>Frontend Developer</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos voluptatum expedita eum quaerat nemo quas voluptatem error assumenda eligendi eos.</p>
      <div className="col-icon">
        <h4>Follow Us</h4>
        <ul>
          <Facebook/>
          <Instagram/>
          <Twitter/>
        </ul>
      </div>
      <p>&copy;Copyright. All rights are reserved</p>
    </div>
  )
}

export default FooterStyle2