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
    setIsClicked(!isClicked);
    handleHover();
  }

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
          <p className="title">{movie.Title}</p>
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
      <h2 className="titles">{movie.Title}</h2>
      </div>
    </div>
  );
};

export default Moviecard;
