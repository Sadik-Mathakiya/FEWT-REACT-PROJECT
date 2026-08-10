import React from 'react'

function Moviecard() {
  return (
    <>
               <div className="sectionHeading">
                <h2>Featured Movies</h2>
                <p>Tap a poster for the movie detail page.</p>
            </div>

            <div className="movieGrid">
                <a className="movieCard" href="ms-dhoni.html">
                    <img src="./Images/Screenshot 2026-07-27 215052.png" alt="MS Dhoni poster"/>
                    <div className="card-body">
                        <h3>M.S. Dhoni: The Untold Story</h3>
                        <p>Biography, Drama, Sport</p>
                    </div>
                </a>
                <a className="movieCard" href="jana-nayagan.html">
                    <img src="./Images/Screenshot 2026-07-28 185602.png" alt="Jana Nayagan poster"/>
                    <div className="card-body">
                        <h3>Jana Nayagan</h3>
                        <p>Crime, Drama, Thriller</p>
                    </div>
                </a>
                <a className="movieCard" href="scam-1992.html">
                    <img src="./Images/Screenshot 2026-07-28 194105.png" alt="Scam 1992 poster"/>
                    <div className="card-body">
                        <h3>Scam 1992</h3>
                        <p>Biography, Crime, Drama</p>
                    </div>
                </a>
                <a className="movieCard" href="karuppu.html">
                    <img src="./Images/Screenshot 2026-07-28 190905.png" alt="Karuppu poster"/>
                    <div className="card-body">
                        <h3>Karuppu</h3>
                        <p>Action, Drama</p>
                    </div>
                </a>
                <a className="movieCard" href="lucky-baskar.html">
                    <img src="./Images/Screenshot 2026-07-28 193649.png" alt="Lucky Baskhar poster"/>
                    <div className="card-body">
                        <h3>Lucky Baskhar</h3>
                        <p>Drama, Thriller</p>
                    </div>
                </a>
            </div>
    </>
  )
}

export default Moviecard
