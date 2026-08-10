import React from 'react'

function Luckybashkar() {
  return (
    <>
                  <section class="detail">
                <div class="detail-intro">
                    <div class="poster">
                        <img src="./Images/Screenshot 2026-07-28 193649.png" alt="Lucky Baskhar poster"/>
                    </div>
                    <div class="detail-info">
                        <p class="note">Movie Details</p>
                        <h1>Lucky Baskhar</h1>
                        <div class="meta">2024 · U/A · Drama, Thriller</div>
                        <div class="actions">
                            <a class="btn pri" href="Home.html">Back Home</a>
                        </div>
                        <video autoplay muted playsinline controls class="detail-video">
                            <source src="Videos/YTDown.com_YouTube_Lucky-Baskhar-Hindi-Trailer-Dulquer-Salm_Media_x8h5zBQxpbM_002_720p.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        <p class="movie-description">Follows the fascinating journey of an ordinary man, Baskhar, and his unexpected tryst with massive wealth and the banking sector in the 1980s.</p>
                    </div>
                </div>

                <div class="detail-row">
                    <section class="detail-box">
                        <h2>Top Cast</h2>
                        <div class="cast-list">
                            <div class="cast-card">
                                <div class="cast-name">Dulquer Salmaan</div>
                                <div class="cast-role">Baskhar</div>
                            </div>
                            <div class="cast-card">
                                <div class="cast-name">Meenakshi Chaudhary</div>
                                <div class="cast-role">Sumathi</div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
    </>
  )
}

export default Luckybashkar
