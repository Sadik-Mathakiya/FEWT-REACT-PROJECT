import React from 'react'

function MsDhoni() {
  return (
    <>
                <section class="detail">
                <div class="detail-intro">
                    <div class="poster">
                        <img src="./Images/Screenshot 2026-07-27 215052.png" alt="MS Dhoni poster"/>
                    </div>
                    <div class="detail-info">
                        <p class="note">Movie Details</p>
                        <h1>M.S. Dhoni: The Untold Story</h1>
                        <div class="meta">2016 · U/A · 3h 10m · Biography, Drama, Sport</div>
                        <div class="actions">
                            <a class="btn pri" href="Home.html">Back Home</a>
                        </div>
                        <video autoplay muted playsinline controls class="detail-video">
                            <source src="Videos/M.S.Dhoni - The Untold Story _ Official Trailer _ Sushant Singh Rajput _ Neeraj Pandey_1080p.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        <p class="movie-description">The untold story of Mahendra Singh Dhoni's journey from ticket collector to trophy collector—the world-cup-winning captain of the Indian Cricket Team.</p>
                    </div>
                </div>

                <div class="detail-row">
                    <section class="detail-box">
                        <h2>Top Cast</h2>
                        <div class="cast-list">
                            <div class="cast-card">
                                <div class="cast-name">Sushant Singh Rajput</div>
                                <div class="cast-role">M.S. Dhoni</div>
                            </div>
                            <div class="cast-card">
                                <div class="cast-name">Kiara Advani</div>
                                <div class="cast-role">Sakshi Dhoni</div>
                            </div>
                            <div class="cast-card">
                                <div class="cast-name">Disha Patani</div>
                                <div class="cast-role">Priyanka</div>
                            </div>
                            <div class="cast-card">
                                <div class="cast-name">Anupam Kher</div>
                                <div class="cast-role">Pan Singh</div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
    </>
  )
}

export default MsDhoni
