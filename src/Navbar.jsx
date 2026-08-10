import React from 'react'

function Navbar() {
  return (
    <>
    <header className="header">
    <nav className="nav">
                <a className="brand" href="Home.html">
                    <img src="./Images/Moviebox.png" alt="MovieBox Logo"/>
                    MovieBox
                </a>
                <div className="links">
                    <a href="Home.html" className="active">Home</a>
                    <a href="movies.html">Movies</a>
                </div>
                <div className="actions">
                    <a className="btn out" href="#login-modal">Log in</a>
                    <a className="btn pri" href="#signup-modal">Sign Up</a>
                </div>
            </nav>
        </header>
    </>
  )
}

export default Navbar
