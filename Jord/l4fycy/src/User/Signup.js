import React from 'react'
import './Signup.css'

function Signup() {
  return (
    <div className="Signup-home">
      <div className="Signup-container">
        <span className="Signup-create">Create New Account</span>
        <span className="Sigunp-login-sub">
          Already a member?{' '}
          <a className="Signup-login" href="#">
            Log in
          </a>
        </span>
        <div className="Signup-Names">
          <input type="text" className="Signup-FirstName" placeholder="First Name" />
          <input type="text" className="Signup-LastName" placeholder="Last Name" />
        </div>
        <input type="text" className="Signup-Email" placeholder="Email" />
        <input type="text" className="Signup-Password" placeholder="Password" />
        <button className="Signup-btn">Signup</button>
      </div>
    </div>
  )
}

export default Signup
