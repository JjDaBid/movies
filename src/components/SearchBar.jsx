/* eslint-disable react/prop-types */
import { FaSearch } from 'react-icons/fa'


const SearchBar = ({ setSearchKey, searchMovies }) => {
  return (
    <>
        <div>
            <form className="d-flex" onSubmit={searchMovies}>
                <input 
                    className="form-control me-2" 
                    type="search" 
                    placeholder="Search" 
                    aria-label="Search"
                    onChange={(e) => setSearchKey(e.target.value)}
                />
                <button className="btn btn-outline-danger" type="submit">
                    <FaSearch />
                </button>
            </form>
        </div>    
    </>
  );
};

export default SearchBar;
