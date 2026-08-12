import { Link } from "react-router-dom"

function Karuppu() {
  return (
    <>
      <div className="detail">
        <div className="detail-intro">
          <div className="poster">
            <img src="/Images/Screenshot 2026-07-28 190905.png" alt="Karuppu poster" />
          </div>
          <div className="detail-info">
            <p className="note">Movie Details</p>
            <h1>Karuppu</h1>
            <div className="meta">2017 · U · 2h 18m · Action, Drama</div>
            <div className="actions">
              <Link className="btn pri" to="/">Back Home</Link>
            </div>
            <source autoPlay playsInline className="detail-video" src="Videos/Karuppu (Hindi) - Teaser _ Suriya _ RJB _ Trisha l Fan Dubbed_1080p60.mp4" type="video/mp4" />
            <iframe
              width="827"
              height="465"
              src="https://www.youtube.com/embed/JpVl_-1YgIo"
              title="Karuppu (Tamil) - Trailer | Suriya | RJ Balaji | Trisha |  @Sai Abhyankkar | Dream Warrior | May 14"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <p className="movie-description">Karuppu is a gripping story about trust, betrayal, and the hidden darkness that can live inside the closest relationships. When a seemingly ordinary family life begins to crack, the truth behind long-buried secrets slowly emerges, forcing everyone to confront fear, love, and the cost of protecting one’s own peace.</p>
          </div>
        </div>

        <div className="detail-row">
          <div className="detail-box">
            <h2>Storyline</h2>
            <p className="storyline-text">Karuppu is a dark and intricate thriller that delves into the depths of family secrets and hidden malice. A man leads a seemingly happy and peaceful life with his loving wife, unaware of the sinister plot brewing around him. His brother-in-law harbors deep resentment and jealousy, nursing a secret agenda to destroy their marriage and ruin his life. As the story unfolds, the man discovers the dark intentions of someone close to him, forcing him to confront his past and present. The narrative spirals into tension, betrayal, and shocking revelations that challenge everything he believed about those closest to him. A gripping exploration of trust, deception, and the price one pays for family loyalty.</p>
          </div>
        </div>

        <div className="detail-row">
          <div className="detail-box">
            <h2>Details</h2>
            <div className="details-grid">
              <div className="detail-item">
                <span className="detail-label">Release Date</span>
                <span className="detail-value">May 14, 2021</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Country</span>
                <span className="detail-value">India</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Language</span>
                <span className="detail-value">Tamil, Telugu, Kannada</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Director</span>
                <span className="detail-value">Sai Abhyankkar</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Runtime</span>
                <span className="detail-value">2 Hours 18 Minutes</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Certificate</span>
                <span className="detail-value">U</span>
              </div>
            </div>
          </div>
        </div>

        <div className="detail-row">
          <div className="detail-box">
            <h2>Did You Know</h2>
            <p className="trivia-text">Karuppu (which means "black" in Tamil) is a psychological thriller that uses color symbolism throughout the film. The movie was lauded for its tight screenplay and unexpected plot twists. Vijay Sethupathi's nuanced performance brought depth to his morally complex character.</p>
          </div>
        </div>

        <div className="detail-row">
          <div className="detail-box">
            <h2>Taglines</h2>
            <p className="tagline-text">"Not everyone is who they seem."</p>
          </div>
        </div>

        <div className="detail-row">
          <div className="detail-box">
            <h2>Top Cast</h2>
            <div className="cast-list">
              <div className="cast-card">
                <div className="cast-name">Vijay Sethupathi</div>
                <div className="cast-role">Karuppan</div>
              </div>
              <div className="cast-card">
                <div className="cast-name">Tanya Ravichandran</div>
                <div className="cast-role">Anbu</div>
              </div>
              <div className="cast-card">
                <div className="cast-name">Bobby Simha</div>
                <div className="cast-role">Kathir</div>
              </div>
              <div className="cast-card">
                <div className="cast-name">Aishwarya Rajesh</div>
                <div className="cast-role">Priya</div>
              </div>
              <div className="cast-card">
                <div className="cast-name">Riythvika</div>
                <div className="cast-role">Maya</div>
              </div>
              <div className="cast-card">
                <div className="cast-name">Aruldoss</div>
                <div className="cast-role">Family Friend</div>
              </div>
              <div className="cast-card">
                <div className="cast-name">Mohan Raman</div>
                <div className="cast-role">Grandfather</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Karuppu
