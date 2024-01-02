import React from 'react'
import "./loginsingup.css"

const loginsingup = () => {
  return (
    <div className='container'>
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <input type="text" placeholder='Enter your Name'/>
        </div>
        <div className="input">
          <input type="email"  placeholder='Enter your email'/>
        </div>
        <div className="input">
          <input type="password" placeholder='Enter your password'/>
        </div>
      </div>
      <div className="forgotpass">Forgot Password <span>Click Here</span></div>
      <div className="submitcontainer">
        <div className="submit">Singup
          </div>
        <div className="submit">Login</div>
        
      </div>
    </div>
  )
}

export default loginsingup