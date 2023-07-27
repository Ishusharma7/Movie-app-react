import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
const Header = () => {
    
    return(
    <header>
    <SearchBar/>
     <nav>
     <ul>
     <li>
     <Link to='/' className="fea" >FEATURED TODAY</Link>
     </li>
     <li>
     <Link to='/Favorites'className="fav">FAVORITES</Link>
     </li>
     </ul>
     </nav>
    </header>
    );
} ;
export default Header;