import React, { FC, useState } from "react";
import AddMovieFrom from "./AddMovieForm";
import Movie from "../models/Movie";
import DisplayMovies from "./DisplayMovies";

const MovieApp: FC = () => {
  const [moviesList, setMoviesList] = useState<Movie[]>([]);
  const [movieAdded, setMovieAdded] = useState<boolean>(true);

  const addMovie = (newMovie: Movie) => {
    setMoviesList([...moviesList, newMovie]);
    setMovieAdded((prev) => !prev);
  };

  const updateMovie = (newMovie: Movie) => {
    setMoviesList(
      moviesList.map((movie) => (movie.id === newMovie.id ? newMovie : movie))
    );
  };

  const deleteMovies = (id: number) => {
    const newMoviesList = moviesList.filter((movie) => movie.id !== id);
    setMoviesList(newMoviesList);
  };

  return (
    <div>
      <div>
        <AddMovieFrom addMovie={addMovie} />
        {movieAdded ? (
          <h4>Добавьте фильм!</h4>
        ) : (
          <DisplayMovies
            moviesList={moviesList}
            updateMovie={updateMovie}
            deleteMovie={deleteMovies}
          />
        )}
      </div>
    </div>
  );
};

export default MovieApp;
