import React from 'react'
import { Link } from 'react-router-dom'

function LoginModal() {
  return (
    <>
      <div id="login-modal" className="modal">
        <div className="modalCard">
          <Link className="closeButton" to={{ hash: '' }} onClick={(e) => { e.preventDefault(); window.location.hash = ''; }}>×</Link>
          <h2>Welcome Back</h2>
          <p>Sign in to continue watching movie trailers</p>
          <form>
            <label htmlFor="login-email">Email</label>
            <input id="login-email" type="email" placeholder="Enter your email" required/>
            <label htmlFor="login-password">Password</label>
            <input id="login-password" type="password" placeholder="Enter your password" required/>
            <button type="submit">Log In</button>
          </form>
          <div className="modalFooter">New here? <Link to={{ hash: '#signup-modal' }} onClick={(e) => { e.preventDefault(); window.location.hash = '#signup-modal'; }}>Create an account</Link></div>
        </div>
      </div>
    </>
  )
}

export default LoginModal
