import React from "react";
import "./styles.css";
import Movie from "./Movie";
import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Favorites from "./Favorites";

export default function App() {


  return (
    <>
    <Router>
         <Header />
      <Routes>
      <Route exact path="/" element={<Movie />} />
          <Route exact path="/Favorites" element={<Favorites />} />
      </Routes>
      </Router>
    </>
  );
}