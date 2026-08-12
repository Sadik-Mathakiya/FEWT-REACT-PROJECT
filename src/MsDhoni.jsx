import { Link } from "react-router-dom"

function MsDhoni() {
  return (
    <>
      <div className="detail">
        <div className="detail-intro">
          <div className="poster">
            <img src="/Images/Screenshot 2026-07-27 215052.png" alt="MS Dhoni poster" />
          </div>
          <div className="detail-info">
            <p className="note">Movie Details</p>
            <h1>M.S. Dhoni: The Untold Story</h1>
            <div className="meta">2016 · U/A · 3h 10m · Biography, Drama, Sport</div>
            <div className="actions">
              <Link className="btn pri" to="/">Back Home</Link>
            </div>
            <iframe
              width="827"
              height="465"
              className="detail-video"
              src="https://www.youtube.com/embed/6L6XqWoS8tw"
              title="M.S.Dhoni - The Untold Story | Official Trailer | Sushant Singh Rajput | Neeraj Pandey"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <p className="movie-description">The untold story of Mahendra Singh Dhoni's journey from a small-town boy with big dreams to one of India's most celebrated cricket captains. This inspiring film explores his struggles, discipline, leadership, and the emotional battles that shaped his rise to greatness. It is a powerful portrait of resilience, sacrifice, and the pressure of carrying a nation’s hopes on your shoulders.</p>
          </div>
        </div>

        <div className="detail-row">
          <div className="detail-box">
            <h2>Storyline</h2>
            <p className="storyline-text">In this emotionally charged biographical drama, witness the extraordinary transformation of a small-town boy who never had a silver spoon from Ranchi, India. Mahendra Singh Dhoni rises from humble beginnings as a ticket collector to become the most celebrated cricket captain in Indian history. The film beautifully captures his early struggles, his determination to prove himself, the sacrifices he made, and the unwavering support from his family. It follows his journey through regional cricket, his selection in the national team, and finally, his historic achievement as captain leading India to victory in the 2011 Cricket World Cup. A tale of grit, passion, and the belief that destiny rewards those who dare to dream.</p>
          </div>
        </div>

        <div className="detail-row">
          <div className="detail-box">
            <h2>Details</h2>
            <div className="details-grid">
              <div className="detail-item">
                <span className="detail-label">Release Date</span>
                <span className="detail-value">September 30, 2016</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Country</span>
                <span className="detail-value">India</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Language</span>
                <span className="detail-value">Hindi</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Director</span>
                <span className="detail-value">Neeraj Pandey</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Runtime</span>
                <span className="detail-value">3 Hours 10 Minutes</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Certificate</span>
                <span className="detail-value">U/A</span>
              </div>
            </div>
          </div>
        </div>

        <div className="detail-row">
          <div className="detail-box">
            <h2>Did You Know</h2>
            <p className="trivia-text">The film's title "M.S. Dhoni: The Untold Story" refers to the untold moments and struggles behind Dhoni's rise to fame that are not well known to the public. Sushant Singh Rajput's portrayal of young Dhoni earned him widespread critical acclaim. The movie showcases real cricket moments and Dhoni's actual cricket journey, making it one of the most authentic sports biopics in Indian cinema.</p>
          </div>
        </div>

        <div className="detail-row">
          <div className="detail-box">
            <h2>Taglines</h2>
            <p className="tagline-text">"Dream, fight, and win" - A story of determination that changed Indian cricket forever.</p>
          </div>
        </div>

        <div className="detail-row">
          <div className="detail-box">
            <h2>Top Cast</h2>
            <div className="cast-list">
              <div className="cast-card">
                <div className="cast-name">Sushant Singh Rajput</div>
                <div className="cast-role">M.S. Dhoni</div>
              </div>
              <div className="cast-card">
                <div className="cast-name">Kiara Advani</div>
                <div className="cast-role">Sakshi Dhoni</div>
              </div>
              <div className="cast-card">
                <div className="cast-name">Disha Patani</div>
                <div className="cast-role">Priyanka</div>
              </div>
              <div className="cast-card">
                <div className="cast-name">Anupam Kher</div>
                <div className="cast-role">Pan Singh</div>
              </div>
              <div className="cast-card">
                <div className="cast-name">Boman Irani</div>
                <div className="cast-role">Mr. Bedi</div>
              </div>
              <div className="cast-card">
                <div className="cast-name">Herry Tangri</div>
                <div className="cast-role">Friend</div>
              </div>
              <div className="cast-card">
                <div className="cast-name">Aakash Dahiya</div>
                <div className="cast-role">Sanjay</div>
              </div>
              <div className="cast-card">
                <div className="cast-name">Rajesh Sharma</div>
                <div className="cast-role">Coach</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MsDhoni
