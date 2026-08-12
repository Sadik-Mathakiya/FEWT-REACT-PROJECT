import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import LoginModal from "./LoginModal"
import Navbar from "./Navbar"
import SignupModal from "./SignupModal"

function Layout() {
  return (
    <>
      <Navbar />
      <main className="page">
        <Outlet />
      </main>
      <LoginModal />
      <SignupModal />
      <Footer />
    </>
  )
}

export default Layout
