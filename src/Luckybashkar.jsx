import { Link } from "react-router-dom"

function Luckybashkar() {
  return (
    <>
      <div className="detail">
        <div className="detail-intro">
          <div className="poster">
            <img src="/Images/Screenshot 2026-07-28 193649.png" alt="Lucky Baskar poster" />
          </div>
          <div className="detail-info">
            <p className="note">Movie Details</p>
            <h1>Lucky Baskar</h1>
            <div className="meta">2024 · U/A · Drama, Thriller</div>
            <div className="actions">
              <Link className="btn pri" to="/">Back Home</Link>
            </div>
            <iframe
              width="827"
              height="465"
              className="detail-video"
              src="https://www.youtube.com/embed/w8EDX5KqFLg"
              title="LUCKY BASKAR (Hindi) - Trailer | Dulquer Salmaan, Meenakshi | VenkyAtluri | GVPrakash | NagaVamsi"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <p className="movie-description">Lucky Baskar is a compelling tale of ambition, opportunity, and the seductive power of money. It follows the journey of an ordinary man whose life changes dramatically after he enters the world of finance, revealing how dreams can quickly turn into a dangerous obsession. The film explores the thin line between luck, hard work, and moral compromise.</p>
          </div>
        </div>

        <div className="detail-row">
          <div className="detail-box">
            <h2>Storyline</h2>
            <p className="storyline-text">Lucky Baskar is an intriguing drama that follows the life of an ordinary man from humble beginnings who experiences an unexpected stroke of luck that changes everything. Thrust into the world of finance and banking during the 1980s economic boom, Baskar discovers opportunities that promise unimaginable wealth and a better life for himself and his family. But with each step up the ladder, he finds himself entangled in a complex web of ambition, greed, and moral compromises. As he tries to balance his newfound success with his personal values, the line between right and wrong becomes increasingly blurred. The film explores how ordinary people can transform when faced with extraordinary circumstances, and at what cost success truly comes.</p>
          </div>
        </div>

        <div className="detail-row">
          <div className="detail-box">
            <h2>Details</h2>
            <div className="details-grid">
              <div className="detail-item">
                <span className="detail-label">Release Date</span>
                <span className="detail-value">September 1, 2024</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Country</span>
                <span className="detail-value">India</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Language</span>
                <span className="detail-value">Telugu, Tamil, Kannada, Hindi</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Director</span>
                <span className="detail-value">Venky Atluri</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Runtime</span>
                <span className="detail-value">2 Hours 30 Minutes</span>
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
            <p className="trivia-text">Lucky Baskar is inspired by the real-life experiences of individuals who rose to prominence during India's banking and finance revolution. Dulquer Salmaan's performance showcases a remarkable range as he portrays a man's moral evolution. The film's period setting and attention to historical detail transport viewers back to the dynamic 1980s financial landscape.</p>
          </div>
        </div>

        <div className="detail-row">
          <div className="detail-box">
            <h2>Taglines</h2>
            <p className="tagline-text">"Luck meets ambition. Ambition has no limits."</p>
          </div>
        </div>

        <div className="detail-row">
          <div className="detail-box">
            <h2>Top Cast</h2>
            <div className="cast-list">
              <div className="cast-card">
                <div className="cast-name">Dulquer Salmaan</div>
                <div className="cast-role">Baskar</div>
              </div>
              <div className="cast-card">
                <div className="cast-name">Meenakshi Chaudhary</div>
                <div className="cast-role">Sumathi</div>
              </div>
              <div className="cast-card">
                <div className="cast-name">Nassar</div>
                <div className="cast-role">Father</div>
              </div>
              <div className="cast-card">
                <div className="cast-name">Tinu Anand</div>
                <div className="cast-role">Banker</div>
              </div>
              <div className="cast-card">
                <div className="cast-name">Vennela Kishore</div>
                <div className="cast-role">Friend</div>
              </div>
              <div className="cast-card">
                <div className="cast-name">Sanjay Swaroop</div>
                <div className="cast-role">Mentor</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Luckybashkar
