import React from "react";
import "./styles.css";
import Movie from "./Movie";
import Header from "./Header";
// import {Router, Route, Routes } from "react-router-dom";
// import Favorites from "./Favorites";

export default function App() {



  return (
    <>
    {/* <Router> */}
         <Header />
      {/*<Routes>
        <Route exact path="/" Component={Movie} />
        <Route exact path="/favorites" Component={Favorites} />
      </Routes> */}
      {/* </Router> */}
      <Movie/>
    </>
  );
}