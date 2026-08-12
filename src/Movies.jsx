import { Link } from "react-router-dom"

function Movies() {
  return (
    <>
      <section className="section-title">
        <h2>All Movies</h2>
        <p>Tap any poster to view full movie details.</p>
      </section>

      <div className="cards">
        <Link className="card" to="/ms-dhoni">
          <img src="/Images/Screenshot 2026-07-27 215052.png" alt="MS Dhoni poster" />
          <div className="card-body">
            <h3>M.S. Dhoni: The Untold Story</h3>
            <p>Biography, Drama, Sport</p>
          </div>
        </Link>
        <Link className="card" to="/jana-nayagan">
          <img src="/Images/Screenshot 2026-07-28 185602.png" alt="Jana Nayagan poster" />
          <div className="card-body">
            <h3>Jana Nayagan</h3>
            <p>Crime, Drama, Thriller</p>
          </div>
        </Link>
        <Link className="card" to="/scam-1992">
          <img src="/Images/Screenshot 2026-07-28 194105.png" alt="Scam 1992 poster" />
          <div className="card-body">
            <h3>Scam 1992</h3>
            <p>Biography, Crime, Drama</p>
          </div>
        </Link>
        <Link className="card" to="/karuppu">
          <img src="/Images/Screenshot 2026-07-28 190905.png" alt="Karuppu poster" />
          <div className="card-body">
            <h3>Karuppu</h3>
            <p>Action, Drama</p>
          </div>
        </Link>
        <Link className="card" to="/lucky-baskar">
          <img src="/Images/Screenshot 2026-07-28 193649.png" alt="Lucky Baskar poster" />
          <div className="card-body">
            <h3>Lucky Baskar</h3>
            <p>Drama, Thriller</p>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Movies
