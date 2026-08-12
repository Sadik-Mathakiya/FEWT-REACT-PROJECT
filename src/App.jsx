import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Jananayagan from "./Jananayagan"
import Karuppu from "./Karuppu"
import Luckybashkar from "./Luckybashkar"
import Moviecard from "./Moviecard"
import Movies from "./Movies"
import MsDhoni from "./MsDhoni"
import Scam1992 from "./Scam1992"
import Trailermovie from "./Trailermovie"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<> <Trailermovie/><Moviecard /> </>} />
          <Route path="home" element={<> <Trailermovie/><Moviecard /> </>} />
          <Route path="movies" element={<Movies />} />
          <Route path="ms-dhoni" element={<MsDhoni />} />
          <Route path="scam-1992" element={<Scam1992 />} />
          <Route path="lucky-baskar" element={<Luckybashkar />} />
          <Route path="karuppu" element={<Karuppu />} />
          <Route path="jana-nayagan" element={<Jananayagan />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
