import React,{ useState, useEffect } from "react";
import Card from "./Category";

const Movies = () => {
  const [data, setData] = useState([]);
  const [Genres, setGenres] = useState([]);

  useEffect(() => {
    // Fetching data from JSON file
    fetch("movie.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    // Extracting unique Genres from data
    const GenreArray = data.map((item) => item.Genre).filter(Boolean);

    const newArray = [].concat(
      ...GenreArray.map((item) => {
        return item.split(", ");
      })
    );

    const uniqueGenres = [...new Set(newArray)];
    setGenres(uniqueGenres);
  }, [data]);


 

  return (
    <div className="movies-container">

      {Genres.map((Genre, index) => (
        <div key={index}>
          <h1>{Genre}</h1>
          <Card Genre={Genre} />
        </div>

      ))}

    </div>
  );
};
export default Movies;