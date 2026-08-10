import React from 'react'

function Movies() {
  return (
    <>
     <section class="section-title">
                <h2>All Movies</h2>
                <p>Tap any poster to view full movie details.</p>
            </section>

            <div class="cards">
                <a class="card" href="ms-dhoni.html">
                    <img src="./Images/Screenshot 2026-07-27 215052.png" alt="MS Dhoni poster"/>
                    <div class="card-body">
                        <h3>M.S. Dhoni: The Untold Story</h3>
                        <p>Biography, Drama, Sport</p>
                    </div>
                </a>
                <a class="card" href="jana-nayagan.html">
                    <img src="./Images/Screenshot 2026-07-28 185602.png" alt="Jana Nayagan poster"/>
                    <div class="card-body">
                        <h3>Jana Nayagan</h3>
                        <p>Crime, Drama, Thriller</p>
                    </div>
                </a>
                <a class="card" href="scam-1992.html">
                    <img src="./Images/Screenshot 2026-07-28 194105.png" alt="Scam 1992 poster"/>
                    <div class="card-body">
                        <h3>Scam 1992</h3>
                        <p>Biography, Crime, Drama</p>
                    </div>
                </a>
                <a class="card" href="karuppu.html">
                    <img src="./Images/Screenshot 2026-07-28 190905.png" alt="Karuppu poster"/>
                    <div class="card-body">
                        <h3>Karuppu</h3>
                        <p>Action, Drama</p>
                    </div>
                </a>
                <a class="card" href="lucky-baskar.html">
                    <img src="./Images/Screenshot 2026-07-28 193649.png" alt="Lucky Baskhar poster"/>
                    <div class="card-body">
                        <h3>Lucky Baskhar</h3>
                        <p>Drama, Thriller</p>
                    </div>
                </a>
            </div>
    </>
  )
}

export default Movies
