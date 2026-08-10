import React from 'react'

function Trailermovie() {
  return (
    <>
      <section className="hero">
                <div className="hero-text">
                    <p className="note">MovieBox</p>
                </div>
            </section>

            <section className="trailers">
                <h2>Latest Trailers</h2>
                <div className="trailers-list">
                    <div className="trailer-item">
                        <video autoPlay muted playsInline controls className="trailer-video">
                            <source src="Videos/M.S.Dhoni - The Untold Story _ Official Trailer _ Sushant Singh Rajput _ Neeraj Pandey_1080p.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        <div className="trailer-title">M.S. Dhoni: The Untold Story</div>
                    </div>
                    <div className="trailer-item">
                        <video autoPlay muted playsInline controls className="trailer-video">
                            <source src="Videos/Jana Nayagan - Official Trailer _ Thalapathy Vijay _ Pooja Hegde _ H Vinoth _ Anirudh _ KVN_1080p.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        <div className="trailer-title">Jana Nayagan</div>
                    </div>
                    <div className="trailer-item">
                        <video autoPlay muted playsInline controls className="trailer-video">
                            <source src="Videos/Scam 1992 – The Harshad Mehta Story _ Official Trailer _ Streaming on Sony Liv_1080p.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        <div className="trailer-title">Scam 1992</div>
                    </div>
                    <div className="trailer-item">
                        <video autoPlay muted playsInline controls className="trailer-video">
                            <source src="Videos/Karuppu (Hindi) - Teaser _ Suriya _ RJB _ Trisha l Fan Dubbed_1080p60.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        <div className="trailer-title">Karuppu</div>
                    </div>
                    <div className="trailer-item">
                        <video autoPlay muted playsInline controls className="trailer-video">
                            <source src="Videos/YTDown.com_YouTube_Lucky-Baskhar-Hindi-Trailer-Dulquer-Salm_Media_x8h5zBQxpbM_002_720p.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        <div className="trailer-title">Lucky Baskhar</div>
                    </div>
                </div>
            </section>

            </>
  )
}

export default Trailermovie
