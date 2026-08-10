import React from 'react'

function LoginModal() {
  return (
    
    <>
    <div id="login-modal" className="modal">
            <div className="modal-box">
                <a className="close-btn" href="#">×</a>
                <h2>Welcome Back</h2>
                <p>Sign in to continue watching movie trailers and save your preferences.</p>
                <form>
                    <label htmlFor="login-email">Email</label>
                    <input id="login-email" type="email" placeholder="Enter your email" required/>
                    <label htmlFor="login-password">Password</label>
                    <input id="login-password" type="password" placeholder="Enter your password" required/>
                    <button type="submit">Log In</button>
                    <small>By continuing, you agree to MovieBox terms of use.</small>
                </form>
                <div className="modal-foot">New here? <a href="#signup-modal">Create an account</a></div>
            </div>
        </div>
    </>
  )
}

export default LoginModal
