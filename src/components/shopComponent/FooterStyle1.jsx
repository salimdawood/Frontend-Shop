import React from 'react'
import { Facebook,Twitter,Instagram } from '../Svg'

const FooterStyle1 = ({className}) => {
  return (
    <div className={className}>
      <div className="col-list">
        <h4>Company</h4>
        <ul>
          <li>About us</li>
          <li>Our Services</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="col-list">
        <h4>Online Shop</h4>
        <ul>
          <li>Watch</li>
          <li>Bag</li>
          <li>Shoes</li>
          <li>Dress</li>
        </ul>
      </div>
      <div className="col-list">
        <h4>Get Help</h4>
        <ul>
          <li>FAQ</li>
          <li>Shipping</li>
          <li>Order Status</li>
          <li>Payment Options</li>
        </ul>
      </div>
      <div className="col-icon">
        <h4>Follow Us</h4>
        <ul>
          <Facebook/>
          <Instagram/>
          <Twitter/>
        </ul>
      </div>

    </div>
  )
}

export default FooterStyle1