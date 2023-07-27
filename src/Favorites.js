import Moviecard from "./Moviecard";
import React, { useEffect, useState, useRef } from "react";

const Favorites = () => {
    const Favorites = JSON.parse(localStorage.getItem('Favorites')) || [];
    const movieRowRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);



    useEffect(() => {
        const handleScroll = () => {
          if (movieRowRef.current) {
            setCanScrollLeft(movieRowRef.current.scrollLeft > 0);
            setCanScrollRight(
              movieRowRef.current.scrollLeft <
                movieRowRef.current.scrollWidth -
                  movieRowRef.current.clientWidth
            );
          }
        };
    
        if (movieRowRef.current) {
          movieRowRef.current.addEventListener("scroll", handleScroll);
          handleScroll();
        }
    
        return () => {
          if (movieRowRef.current) {
            movieRowRef.current.removeEventListener("scroll", handleScroll);
          }
        };
      });
    
      // scrolling left
      const scrollLeft = () => {
        if (movieRowRef.current) {
          movieRowRef.current.scrollBy({
            left: -600,
            behavior: "smooth",
          });
        }
      };
      // scrolling right
      const scrollRight = () => {
        if (movieRowRef.current) {
          movieRowRef.current.scrollBy({
            left: 600,
            behavior: "smooth",
          });
        }
      };

    return(<>
        <h1> Favorites</h1>
          <div className="movie-container">
          {canScrollLeft && (
        <div className="navigation-button left" onClick={scrollLeft}>
          &lt;
        </div>
      )}
      {Favorites.length > 0 ? (
        <div className="movie-row" ref={movieRowRef}>
          {Favorites.map((movie) => (
            <div className="card-container" key={movie.Title}>
            <Moviecard movie = {movie} />
            </div>
          ))}
        </div>
      ) : (
        <div className="noFav">
            <p>No favorites found</p>
        </div>
      )}

      {canScrollRight && (
        <div className="navigation-button right" onClick={scrollRight}>
          &gt;
        </div>
      )}
    </div>
    </>
    )

}
export default Favorites;