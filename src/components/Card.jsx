/* eslint-disable react/prop-types */

const Card = ({ movie, selectMovie }) => {
    const URL_IMAGE = "https://image.tmdb.org/t/p/original";
  
    const handleClick = () => {
      selectMovie(movie);
    };
  
    return (
      <div className="col-md-4 mb-3" onClick={handleClick}>
        <img src={`${URL_IMAGE + movie.poster_path}`} alt={movie.title} height={600} width="100%" />
        <h4 className="text-center text-light">{movie.title}</h4>
      </div>
    );
  };
  
  export default Card;
  