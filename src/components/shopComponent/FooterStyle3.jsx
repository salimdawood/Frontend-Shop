import React from 'react'
import { Facebook,Twitter,Instagram } from '../Svg'

const FooterStyle3 = ({className}) => {
  return (
    <div className={className}>
      <div className="glass-container">
        <div className="col-icon">
          <h3>Follow Us</h3>
          <ul>
            <Facebook/>
            <Instagram/>
            <Twitter/>
          </ul>
        </div>
        <p>&copy;Copyright. All rights are reserved</p>
      </div>
  </div>
  )
}

export default FooterStyle3