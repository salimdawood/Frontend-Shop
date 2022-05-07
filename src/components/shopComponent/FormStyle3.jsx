import React from 'react'

const FormStyle3 = ({className}) => {
  return (
    <div className={className}>
      <div className="col-1">
      </div>
      <div className="col-2">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name"/>
          <input type="email" placeholder="Your Email"/>
          <input type="number" placeholder="Phone"/>
          <textarea>Message</textarea>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    </div>
  )
}

export default FormStyle3