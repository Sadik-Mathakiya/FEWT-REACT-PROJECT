import React from 'react'

function Jananayagan() {
  return (
    <>
      <section class="detail">
                <div class="detail-intro">
                    <div class="poster">
                        <img src="./Images/Screenshot 2026-07-28 185602.png" alt="Jana Nayagan poster"/>
                    </div>
                    <div class="detail-info">
                        <p class="note">Movie Details</p>
                        <h1>Jana Gana Mana</h1>
                        <div class="meta">2022 · U/A · 2h 42m · Crime, Drama, Thriller</div>
                        <div class="actions">
                            <a class="btn pri" href="Home.html">Back Home</a>
                        </div>
                        <video autoplay muted playsinline controls class="detail-video">
                            <source src="Videos/Jana Nayagan - Official Trailer _ Thalapathy Vijay _ Pooja Hegde _ H Vinoth _ Anirudh _ KVN_1080p.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        <p class="movie-description">As a college professor's murder sparks student unrest, a cop launches an investigation while a lawyer seeks justice in the courtroom.</p>
                    </div>
                </div>

                <div class="detail-row">
                    <section class="detail-box">
                        <h2>Top Cast</h2>
                        <div class="cast-list">
                            <div class="cast-card">
                                <div class="cast-name">Prithviraj Sukumaran</div>
                                <div class="cast-role">Aravind Swaminathan</div>
                            </div>
                            <div class="cast-card">
                                <div class="cast-name">Suraj Venjaramoodu</div>
                                <div class="cast-role">Sajjan Kumar</div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
    </>
  )
}

export default Jananayagan
