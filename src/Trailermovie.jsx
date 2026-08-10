import React from 'react';

function Trailermovie() {
  return (
    <>
      <div className="heroSection">
        <div className="heroContent">
          <p className="heroNote">MovieBox</p>
        </div>
      </div>

      <div className="trailerSection">
        <h2>Latest Trailers</h2>
        <div className="trailerList">
          <div className="trailerCard">
            <iframe
              className="trailerFrame"
              src="https://www.youtube.com/embed/6L6XqWoS8tw"
              title="M.S. Dhoni: The Untold Story"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <div className="trailerTitle">M.S. Dhoni: The Untold Story</div>
            <a className="trailerLink" href="https://www.youtube.com/watch?v=6L6XqWoS8tw" target="_blank" rel="noreferrer">
              Watch on YouTube
            </a>
          </div>

          <div className="trailerCard">
            <iframe
              className="trailerFrame"
              src="https://www.youtube.com/embed/fJaAYcERf3Y"
              title="Jana Nayagan"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <div className="trailerTitle">Jana Nayagan</div>
            <a className="trailerLink" href="https://www.youtube.com/watch?v=fJaAYcERf3Y" target="_blank" rel="noreferrer">
              Watch on YouTube
            </a>
          </div>

          <div className="trailerCard">
            <iframe
              className="trailerFrame"
              src="https://www.youtube.com/embed/ISORfez27og"
              title="Scam 1992"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <div className="trailerTitle">Scam 1992</div>
            <a className="trailerLink" href="https://www.youtube.com/watch?v=ISORfez27og" target="_blank" rel="noreferrer">
              Watch on YouTube
            </a>
          </div>

          <div className="trailerCard">
            <iframe
              className="trailerFrame"
              src="https://www.youtube.com/embed/JpVl_-1YgIo"
              title="Karuppu"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <div className="trailerTitle">Karuppu</div>
            <a className="trailerLink" href="https://www.youtube.com/watch?v=JpVl_-1YgIo" target="_blank" rel="noreferrer">
              Watch on YouTube
            </a>
          </div>

          <div className="trailerCard">
            <iframe
              className="trailerFrame"
              src="https://www.youtube.com/embed/w8EDX5KqFLg"
              title="Lucky Baskhar"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <div className="trailerTitle">Lucky Baskhar</div>
            <a className="trailerLink" href="https://www.youtube.com/watch?v=w8EDX5KqFLg" target="_blank" rel="noreferrer">
              Watch on YouTube
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Trailermovie;
