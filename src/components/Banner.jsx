/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import './banner.css';

const Banner = ({ movie, playing, setPlaying, imageURL }) => {
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    if (movie && movie.videos && movie.videos.results) {
      const trailer = movie.videos.results.find(
        (vid) => vid.name === "Official Trailer"
      );
      setTrailer(trailer ? trailer : movie.videos.results[0]);
    }
  }, [movie]);

  return (
    <div>
      <main>
        {movie ? (
          <div
            className="viewtrailer"
            style={{
                backgroundImage: `url("${imageURL}${movie.backdrop_path}")`,
              }}
          >



{playing && trailer ? (
  <>
    <YouTube
      videoId={trailer.key}
      className="reproductor container"
      containerClassName={"youtube-container amru"}
      opts={{
        width: "100%",
        height: "100%",
        playerVars: {
          autoplay: 1,
          controls: 0,
          cc_load_policy: 0,
          fs: 0,
          iv_load_policy: 0,
          modestbranding: 0,
          rel: 0,
          showinfo: 0,
        },
      }}
    />
    <button onClick={() => setPlaying(false)} className="boton">
      Close
    </button>
  </>
) : (
  <div className="container">
    <div className="">
      {trailer ? (
        <button
          className="boton"
          onClick={() => setPlaying(true)}
          type="button"
        >
          Play Trailer
        </button>
      ) : (
        "No hay video disponible"
      )}
      <h1 className="text-white">{movie.title}</h1>
      <p className="text-white">{movie.overview}</p>
    </div>
  </div>
)}





          </div>
        ) : null}
      </main>
    </div>
  );
};

export default Banner;
