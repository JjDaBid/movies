/* eslint-disable react/prop-types */

import { useState, useRef } from "react";
import Banner from "../components/Banner";
import Layout from "../components/layout/index";
import Card from "../components/Card";

const Home = ({ movies }) => {
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";
  const bannerRef = useRef(null); 

  const [playing, setPlaying] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
    setPlaying(true);
    scrollToBanner();
  };

  const scrollToBanner = () => {
    if (bannerRef.current) {
      bannerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout>
      {selectedMovie && (
        <div ref={bannerRef}>
          <Banner
            movie={selectedMovie}
            playing={playing}
            setPlaying={setPlaying}
            imageURL={URL_IMAGE}
          />
        </div>
      )}

      <div className="container mt-4">
        <div className="row">
          {movies.map((movie) => (
            <Card
              key={movie.id}
              movie={movie}
              selectMovie={() => handleSelectMovie(movie)}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
