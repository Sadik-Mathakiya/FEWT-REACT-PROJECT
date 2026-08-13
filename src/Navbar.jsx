import { Link, NavLink } from "react-router-dom"

function Navbar() {
  return (
    <div className="siteHeader">
      <div className="topNav">
        <Link className="brand" to="/">
          <img src="/Images/Moviebox.png" alt="MovieBox Logo" />
          MovieBox
        </Link>
        <div className="navLinks">
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")} end>
            Home
          </NavLink>
          <NavLink to="/movies" className={({ isActive }) => (isActive ? "active" : "")}>
            Movies
          </NavLink>
        </div>
        <div className="navActions">
          <Link
            className="btn out"
            to={{ hash: '#login-modal' }}
            onClick={(e) => { e.preventDefault(); window.location.hash = '#login-modal'; }}
          >
            Log in
          </Link>
          <Link
            className="btn pri"
            to={{ hash: '#signup-modal' }}
            onClick={(e) => { e.preventDefault(); window.location.hash = '#signup-modal'; }}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
