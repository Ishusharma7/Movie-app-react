import React from 'react';
import './searchbar.css'
// import {faSearch} from 'react-icons/fa';

const SearchBar=()=>{
    return(
                <div className='input-wrapper'>
        <input placeholder="type to search" />
            {/* <faSearch id='search-icon'/> */}
        </div>
    )
}
export default SearchBar;