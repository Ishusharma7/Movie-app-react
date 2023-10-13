import React,{useState, useEffect} from 'react';
import './searchbar.css'
import Moviecard from './Moviecard';

const SearchBar=()=>{
    const [search, setSearch] = useState("");
    const [titles, setTitles] = useState([]);


    useEffect(() => {
        // Fetch movie data from the movie.json file
        fetch('/movie.json')
          .then((response) => response.json())
          .then((data) => {
            setTitles(data); // Update the titles state with the fetched data
          })
          .catch((error) => {
            console.error('Error fetching movie data:', error);
          });
      }, []);


    

      const handleChange = (e) => {
        e.stopPropagation();
        const value = e.target.value;
        setSearch(value);
    
        if (value.length > 0) {
          const filteredTitles = titles.filter((item) => {
            const lowerCaseTitle = item.Title.toLowerCase();
            const lowerCaseSearch = value.toLowerCase();
            return lowerCaseTitle.includes(lowerCaseSearch);
          });
          console.log(filteredTitles);
        }
      }

    return(
        <>
                <div className='input-wrapper'>
        <input placeholder="type to search" onChange={handleChange} value={search} />
        </div>

        {/* {filteredTitles.map((movie) => (
            <div className="card-container" key={movie.Title}>
            <Moviecard movie = {movie} />
            </div>
          ))} */}
        </>
    )
}
export default SearchBar;