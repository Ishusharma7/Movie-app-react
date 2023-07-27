import React, { useEffect, useState, useRef } from "react";
import Moviecard from "./Moviecard";

const Card = ({ Genre }) => {
  const [movies, setMovies] = useState([]);
  const movieRowRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // fetching data from json file
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("/movie.json");
        const data = await response.json();
        // filtering json data
        const moviesByGenre = data.filter((movie) =>
          movie.Genre.includes(Genre)
        );

        setMovies(moviesByGenre);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [Genre]);

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

  return (
    <div className="movie-container">
      {canScrollLeft && (
        <div className="navigation-button left" onClick={scrollLeft}>
          &lt;
        </div>
      )}
      <div className="movie-row" ref={movieRowRef}>
        {movies.map((movie) => (
          <div className="card-container" key={movie.Title}>
            <Moviecard movie={movie} />
          </div>
        ))}
      </div>
      {canScrollRight && (
        <div className="navigation-button right" onClick={scrollRight}>
          &gt;
        </div>
      )}
    </div>
  );
};

export default Card;
