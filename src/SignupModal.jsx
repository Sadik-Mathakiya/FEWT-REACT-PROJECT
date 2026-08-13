import React from 'react'
import { Link } from 'react-router-dom'

function SignupModal() {
  return (
    <>
      <div id="signup-modal" className="modal">
        <div className="modalCard">
          <Link className="closeButton" to={{ hash: '' }} onClick={(e) => { e.preventDefault(); window.location.hash = ''; }}>×</Link>
          <h2>Create Account</h2>
          <p>Sign up with your email to get access to all movie trailers and details.</p>
          <form>
            <label htmlFor="signup-name">Full name</label>
            <input id="signup-name" type="text" placeholder="Enter your full name" required/>
            <label htmlFor="signup-email">Email</label>
            <input id="signup-email" type="email" placeholder="Enter your email" required/>
            <label htmlFor="signup-password">Create password</label>
            <input id="signup-password" type="password" placeholder="Create a password" required/>
            <button type="submit">Sign Up</button>
          </form>
          <div className="modalFooter">Already have account? <Link to={{ hash: '#login-modal' }} onClick={(e) => { e.preventDefault(); window.location.hash = '#login-modal'; }}>Log in</Link></div>
        </div>
      </div>
    </>
  )
}

export default SignupModal
