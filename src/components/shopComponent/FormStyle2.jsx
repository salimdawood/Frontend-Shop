import React from 'react'

const FormStyle2 = ({className}) => {
  return (
    <form className={className}>
      <label for="name">Name</label>
      <input type="text" id="name" placeholder="Enter your name"/>
      <label for="email">Email</label>
      <input type="email" id="email" placeholder="Enter your email"/>
      <label for="password">Password</label>
      <input type="password" id="password" placeholder="Enter password"/>
      <label for="confirm-password">Confirm Password</label>
      <input type="password" id="confirm-password" placeholder="Confirm your password"/>
      <input type="button" value="Sign up" />
    </form>
  )
}

export default FormStyle2