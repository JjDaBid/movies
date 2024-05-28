import { BrowserRouter, useRoutes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import './App.css';

const AppRoutes = ({ movies, selectMovie }) => {
  let routes = useRoutes([
    { path: "/", element: <Home movies={movies} selectMovie={selectMovie} /> }
  ]);
  return routes;
}

const App = () => {
  const API_URL = 'https://api.themoviedb.org/3';
  const API_KEY = '108cf7baef8537f423f3b1ca3a05bc08';
  const LANGUAGE = 'es-ES';

  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [setTrailer] = useState(null);
  const [setMovie] = useState({ title: "Loading Movies" });

  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const { data: { results } } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
        language: LANGUAGE
      },
    });
    setMovies(results);
    setMovie(results[0]);

    if(results.length) {
      await fetchMovie(results[0].id)
    }
  }

  const fetchMovie = async(id) => {
    const {data} = await axios.get(`${API_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
        append_to_response: "casts,videos,images,releases",
        language: LANGUAGE
      }
    })

    if(data.videos && data.videos.results){
      const trailer = data.videos.results.find(
        (vid) => vid.name === "Official Trailer"
      );
      setTrailer(trailer ? trailer : data.videos.results[0])
      
    }
    setMovie(data);
    console.log(data)
  }

  const selectMovie = async(movie) => {
    fetchMovie(movie.id)
    setMovie(movie)
    window.scrollTo(0, 0)
  }

  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
  }

  useEffect(() => {
    fetchMovies();
  }, []);


  return (
    <div className='main-container'>
      <BrowserRouter>
      <NavBar setSearchKey={setSearchKey} searchMovies={searchMovies} />
      <AppRoutes movies={movies} selectMovie={selectMovie}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
