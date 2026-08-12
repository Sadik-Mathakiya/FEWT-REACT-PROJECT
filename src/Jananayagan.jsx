import { Link } from "react-router-dom"

function Jananayagan() {
  return (
    <>
      <div className="detail">
        <div className="detail-intro">
          <div className="poster">
            <img src="/Images/Screenshot 2026-07-28 185602.png" alt="Jana Nayagan poster" />
          </div>
          <div className="detail-info">
            <p className="note">Movie Details</p>
            <h1>Jana Nayagan</h1>
            <div className="meta">2022 · U/A · 2h 42m · Crime, Drama, Thriller</div>
            <div className="actions">
              <Link className="btn pri" to="/">Back Home</Link>
            </div>
            <iframe
              width="827"
              className="detail-video"
              height="465"
              src="https://www.youtube.com/embed/fJaAYcERf3Y"
              title="Jana Nayagan - Official Trailer | Thalapathy Vijay | Pooja Hegde | H Vinoth | Anirudh | KVN"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <p className="movie-description">A gripping courtroom drama that blends mystery, justice, and the emotional turmoil of a nation. When a respected professor is killed under suspicious circumstances, the case becomes more than a criminal investigation; it becomes a battle of truth, power, and moral courage. The story unfolds through tension, political pressure, and the search for justice in a deeply divided society.</p>
          </div>
        </div>

        <div className="detail-row">
          <div className="detail-box">
            <h2>Storyline</h2>
            <p className="storyline-text">When a respected college professor is mysteriously murdered, the death sends shockwaves through the academic institution and society at large. A determined police officer takes on the investigation, navigating through political pressure and conflicting testimonies. Simultaneously, an ambitious lawyer fights for justice in the courtroom, uncovering deep conspiracies and moral compromises. The film becomes a gripping exploration of truth, power, and the resilience required to stand against a corrupt system. Multiple perspectives intertwine as the case progresses, revealing that justice is not always black and white but depends on who controls the narrative.</p>
          </div>
        </div>

        <div className="detail-row">
          <div className="detail-box">
            <h2>Details</h2>
            <div className="details-grid">
              <div className="detail-item">
                <span className="detail-label">Release Date</span>
                <span className="detail-value">April 20, 2022</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Country</span>
                <span className="detail-value">India</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Language</span>
                <span className="detail-value">Tamil, Telugu, Kannada, Malayalam</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Director</span>
                <span className="detail-value">H. Vinoth</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Runtime</span>
                <span className="detail-value">2 Hours 42 Minutes</span>
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
            <p className="trivia-text">Jana Nayagan (which means "People's Leader") is known for its powerful courtroom sequences and realistic police investigation scenes. The film was shot in actual locations including Gulsunde School where pivotal scenes were filmed. The cast's performance received praise for bringing depth to their complex, morally ambiguous characters.</p>
          </div>
        </div>

        <div className="detail-row">
          <div className="detail-box">
            <h2>Taglines</h2>
            <p className="tagline-text">"Truth has many faces. Justice has none."</p>
          </div>
        </div>

        <div className="detail-row">
          <div className="detail-box">
            <h2>Top Cast</h2>
            <div className="cast-list">
              <div className="cast-card">
                <div className="cast-name">Prithviraj Sukumaran</div>
                <div className="cast-role">Aravind Swaminathan</div>
              </div>
              <div className="cast-card">
                <div className="cast-name">Suraj Venjaramoodu</div>
                <div className="cast-role">Sajjan Kumar</div>
              </div>
              <div className="cast-card">
                <div className="cast-name">Mamitha Baiju</div>
                <div className="cast-role">Nandini</div>
              </div>
              <div className="cast-card">
                <div className="cast-name">Aju Varghese</div>
                <div className="cast-role">Advocate</div>
              </div>
              <div className="cast-card">
                <div className="cast-name">Vijay Sethupathi</div>
                <div className="cast-role">Special Guest</div>
              </div>
              <div className="cast-card">
                <div className="cast-name">Nikhil Nair</div>
                <div className="cast-role">Student Leader</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Jananayagan
