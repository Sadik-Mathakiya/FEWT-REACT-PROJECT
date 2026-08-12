import { Link } from "react-router-dom"

function Scam1992() {
  return (
    <>
      <div className="detail">
        <div className="detail-intro">
          <div className="poster">
            <img src="/Images/Screenshot 2026-07-28 194105.png" alt="Scam 1992 poster" />
          </div>
          <div className="detail-info">
            <p className="note">Show Details</p>
            <h1>Scam 1992: The Harshad Mehta Story</h1>
            <div className="meta">2020 · 10 Episodes · Biography, Crime, Drama</div>
            <div className="actions">
              <Link className="btn pri" to="/">Back Home</Link>
            </div>
            <iframe
              width="827"
              height="465"
              className="detail-video"
              src="https://www.youtube.com/embed/ISORfez27og"
              title="Scam 1992 – The Harshad Mehta Story | Official Trailer | Streaming from 09-10-2020"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <p className="movie-description">Set in 1980s and 90s Bombay, this series chronicles the spectacular rise and devastating fall of Harshad Mehta, a charismatic stockbroker who changed the face of the Indian financial world. It explores ambition, greed, corruption, and the fragile nature of power, offering a sharp look at how one man’s hunger for success altered the lives of millions.</p>
          </div>
        </div>

        <div className="detail-row">
          <div className="detail-box">
            <h2>Storyline</h2>
            <p className="storyline-text">Set in the vibrant yet volatile financial landscape of 1980s and 90s Bombay, this gripping series chronicles the meteoric rise and catastrophic fall of Harshad Mehta, a charming and audacious stockbroker who revolutionized the Indian stock market. From a small-time job holder to the flamboyant "Big Bull" of the exchange, Mehta's story is one of ambition, cunning, and ultimate hubris. As he manipulates banking systems, exploits loopholes, and accumulates obscene wealth, investigative journalist Sucheta Dalal begins to expose his fraudulent schemes. The series masterfully explores themes of greed, corruption, power dynamics, and the fragility of success, culminating in one of India's biggest financial scandals that shook the nation's economy.</p>
          </div>
        </div>

        <div className="detail-row">
          <div className="detail-box">
            <h2>Details</h2>
            <div className="details-grid">
              <div className="detail-item">
                <span className="detail-label">Release Date</span>
                <span className="detail-value">October 9, 2020</span>
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
                <span className="detail-label">Creator</span>
                <span className="detail-value">Hansal Mehta</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Episodes</span>
                <span className="detail-value">10 Episodes</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Certificate</span>
                <span className="detail-value">18+</span>
              </div>
            </div>
          </div>
        </div>

        <div className="detail-row">
          <div className="detail-box">
            <h2>Did You Know</h2>
            <p className="trivia-text">Scam 1992 is based on true events and the investigation conducted by journalist Sucheta Dalal and her newspaper. Pratik Gandhi's performance as Harshad Mehta became iconic and earned widespread acclaim. The series won multiple awards and became one of Sony Liv's most-watched original productions, pioneering the crime drama genre in Indian web series.</p>
          </div>
        </div>

        <div className="detail-row">
          <div className="detail-box">
            <h2>Taglines</h2>
            <p className="tagline-text">"Risk Hai Toh Ishq Hai" - Where ambition meets downfall.</p>
          </div>
        </div>

        <div className="detail-row">
          <div className="detail-box">
            <h2>Top Cast</h2>
            <div className="cast-list">
              <div className="cast-card">
                <div className="cast-name">Pratik Gandhi</div>
                <div className="cast-role">Harshad Mehta</div>
              </div>
              <div className="cast-card">
                <div className="cast-name">Shreya Dhanwanthary</div>
                <div className="cast-role">Sucheta Dalal</div>
              </div>
              <div className="cast-card">
                <div className="cast-name">Hemant Kher</div>
                <div className="cast-role">Ashwin Mehta</div>
              </div>
              <div className="cast-card">
                <div className="cast-name">Nikhil Dwivedi</div>
                <div className="cast-role">Rakesh</div>
              </div>
              <div className="cast-card">
                <div className="cast-name">Anjali Barot</div>
                <div className="cast-role">Journalist</div>
              </div>
              <div className="cast-card">
                <div className="cast-name">Satish Kaushik</div>
                <div className="cast-role">Mentor</div>
              </div>
              <div className="cast-card">
                <div className="cast-name">Shweta Basu Prasad</div>
                <div className="cast-role">Investigator</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Scam1992
