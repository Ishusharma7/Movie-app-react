import React, { useState, useEffect, useRef } from "react";
import Modal from "@material-ui/core/Modal";
const Moviecard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [open, setOpen] = useState(false);
  const modalRef = useRef(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    // Open the modal
    handleOpen();
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        // Clicked outside the modal, so close it
        handleClose();
      }
      setIsHovered(false);
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  const handleClicks = (event) => {
    event.stopPropagation();


    const Favorites = localStorage.getItem('Favorites');
    let FavoritesArray = [];
  
    if (Favorites) {
      FavoritesArray = JSON.parse(Favorites);
    }
  
    const index = FavoritesArray.findIndex((favMovie) => favMovie.Title === movie.Title);
    if (index > -1) {
      FavoritesArray.splice(index, 1);
    } else {
      FavoritesArray.push(movie);
    }
  
    localStorage.setItem('Favorites', JSON.stringify(FavoritesArray));
  








    const favorites = localStorage.getItem('favorites');
    let favoritesArray = [];
  
    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }
  
    const indexe = favoritesArray.indexOf(movie.Title);
    if (indexe > -1) {
      // Remove from favorites
      favoritesArray.splice(indexe, 1);
    } else {
      // Add to favorites
      favoritesArray.push(movie.Title);
    }
  
    localStorage.setItem('favorites', JSON.stringify(favoritesArray));









    setIsClicked(!isClicked);
    handleHover();

  };

  useEffect(()=>{const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites.forEach((title) => {
    // console.log(title)
    if (movie.Title === title) {
      setIsClicked(!isClicked);
    }
  });
  },[]);
   

  return (
    <div
      className={`thumbnail ${isHovered ? "expanded" : ""}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onClick={handleClick}
    >
      {/* Modal */}
      <Modal onClose={handleClose} open={open}>
        <div ref={modalRef} className="modalComponent">
          <h1>{movie.Title}</h1>
          <img
            src={movie.Images}
            alt={movie.Title}
            style={{ width: "350px", height: "150px" }}
          />
          <div className="A">
            <p className="A1">Rated: {movie.Rated}</p>
            <p className="A2">Year: {movie.Year}</p>
            <p className="A3">Released: {movie.Released}</p>
            <p className="A4">Runtime: {movie.Runtime}</p>
          </div>
          <div className="B">
            <p className="B1">Genre: {movie.Genre}</p>
            <p className="B2">Director: {movie.Director}</p>
            <p className="B3">Writer: {movie.Writer}</p>
          </div>
          <p>Actors: {movie.Actors}</p>
          <p>Plot: {movie.Plot}</p>
          <p>Language: {movie.Language}</p>
          <p>Country: {movie.Country}</p>
          <p>Awards: {movie.Awards}</p>
        </div>
      </Modal>

      <div>
        {/* creating a thumbnail to appear on hover */}
        {/* hiding thumbnail when curser not on the image */}
        <div className={isHovered ? "movie-name" : "hidden"}>
          <p className="Title">{movie.Title}</p>
          <p className="rated">{movie.Rated}</p>
          <p className="year">{movie.Year}</p>
          <p className="runtime">{movie.Runtime}</p>
        </div>
        <div className="imge">
          {/* handling toggling of images on hover */}
          <img
            src={isHovered ? movie.Images : movie.Poster}
            alt={movie.Title}
          />
         <button className={isClicked ? "heart-icon2" : "heart-icon"} onClick= {handleClicks}>&#9829;</button>

        </div>
      </div>
      <div>
      <h2 className="Titles">{movie.Title}</h2>
      </div>
    </div>
  );
};

export default Moviecard;
