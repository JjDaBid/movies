/* eslint-disable react/prop-types */

import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import SearchBar from './SearchBar';

const NavBar = ({ setSearchKey, searchMovies }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark w-100">
      <div className="container-fluid">
        <div>
          <img src={logo} alt="" width={200} />
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon bg-light"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <NavLink
                    to='/'
                    className="nav-link active text-white"
                >
                    Inicio
                </NavLink>              
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Películas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Series</a>
            </li>
          </ul>
        </div>
        <div className='ms-4'>
          <SearchBar setSearchKey={setSearchKey} searchMovies={searchMovies} />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
