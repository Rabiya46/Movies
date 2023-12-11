import React, { FC } from "react";
import "./App.css";
import MovieApp from "./components/MovieApp";
import HeaderMovies from "./components/HeaderMovies";

const App: FC = () => {
  return (
    <>
      <HeaderMovies />
      <MovieApp />
    </>
  );
};

export default App;
