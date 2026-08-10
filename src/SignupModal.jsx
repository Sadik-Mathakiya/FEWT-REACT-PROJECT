import React from 'react'

function SignupModal() {
  return (
    
    <>
    <div id="signup-modal" className="modal">
            <div className="modal-box">
                <a className="close-btn" href="#">×</a>
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
                    <small>We only use this info to personalize your MovieBox experience.</small>
                </form>
                <div className="modal-foot">Already have account? <a href="#login-modal">Log in</a></div>
            </div>
        </div>
    </>
  )
}

export default SignupModal
