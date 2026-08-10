import React from 'react'

function Karuppu() {
  return (
    <>
                  <section class="detail">
                <div class="detail-intro">
                    <div class="poster">
                        <img src="./Images/Screenshot 2026-07-28 190905.png" alt="Karuppu poster"/>
                    </div>
                    <div class="detail-info">
                        <p class="note">Movie Details</p>
                        <h1>Karuppu</h1>
                        <div class="meta">2017 · U · 2h 18m · Action, Drama</div>
                        <div class="actions">
                            <a class="btn pri" href="Home.html">Back Home</a>
                        </div>
                        <video autoplay muted playsinline controls class="detail-video">
                            <source src="Videos/Karuppu (Hindi) - Teaser _ Suriya _ RJB _ Trisha l Fan Dubbed_1080p60.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        <p class="movie-description">A man's life is turned upside down when he discovers that his brother-in-law has secret intentions to ruin his happy marriage.</p>
                    </div>
                </div>

                <div class="detail-row">
                    <section class="detail-box">
                        <h2>Top Cast</h2>
                        <div class="cast-list">
                            <div class="cast-card">
                                <div class="cast-name">Vijay Sethupathi</div>
                                <div class="cast-role">Karuppan</div>
                            </div>
                            <div class="cast-card">
                                <div class="cast-name">Tanya Ravichandran</div>
                                <div class="cast-role">Anbu</div>
                            </div>
                            <div class="cast-card">
                                <div class="cast-name">Bobby Simha</div>
                                <div class="cast-role">Kathir</div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
    </>
  )
}

export default Karuppu
