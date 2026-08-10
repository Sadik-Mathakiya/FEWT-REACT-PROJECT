import React from 'react'

function Navbar() {
  return (
    <>
    <div className="siteHeader">
    <div className="topNav">
                <a className="brand" href="Home.html">
                    <img src="./Images/Moviebox.png" alt="MovieBox Logo"/>
                    MovieBox
                </a>
                <div className="navLinks">
                    <a href="Home.html" className="active">Home</a>
                    <a href="movies.html">Movies</a>
                </div>
                <div className="navActions">
                    <a className="btn out" href="#login-modal">Log in</a>
                    <a className="btn pri" href="#signup-modal">Sign Up</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar
