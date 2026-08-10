import Footer from "./Footer"
import Jananayagan from "./Jananayagan"
import Karuppu from "./Karuppu"
import LoginModal from "./LoginModal"
import Luckybashkar from "./Luckybashkar"
import Moviecard from "./Moviecard"
import Movies from "./Movies"
import MsDhoni from "./MsDhoni"
import Navbar from "./Navbar"
import Scam1992 from "./Scam1992"
import SignupModal from "./SignupModal"
import Trailermovie from "./Trailermovie"
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
function App() {
  return (
    
    <>
    <BrowserRouter>
           <Navbar/>          
    <main className="page">
      
       <Routes>
          <Route path="/home.html" element={<> <Trailermovie/><Moviecard />  </> } />
          <Route path="/" element={<> <Trailermovie/><Moviecard />  </> } />
          <Route path="/movies.html" element={ <Movies/> } />
          <Route path="/ms-dhoni.html" element={ <MsDhoni/> } />
          <Route path="/scam-1992.html" element={ <Scam1992/> }/>
          <Route path="/lucky-baskar.html" element={<Luckybashkar/>} />
          <Route path="/karuppu.html" element={<Karuppu/>}/>
          <Route path="/jana-nayagan.html" element={<Jananayagan/>}/>
       </Routes>
        
    
        </main>
        <LoginModal/>
        <SignupModal/>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
