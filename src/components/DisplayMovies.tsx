import React, { FC } from "react";
import Movie from "../models/Movie";
import SingleMovie from "./SingleMovie";
import { styled } from "@mui/material";

interface DisplayMoviesProps {
  moviesList: Movie[];
  updateMovie: (newMovie: Movie) => void;
  deleteMovie: (id: number) => void;
}

const DisplayMovies: FC<DisplayMoviesProps> = ({
  moviesList,
  updateMovie,
  deleteMovie,
}) => {
  return (
    <StyledContainer>
      {moviesList.map((movie) => (
        <SingleMovie
          key={movie.id}
          movie={movie}
          updateMovie={updateMovie}
          deleteMovie={deleteMovie}
        />
      ))}
    </StyledContainer>
  );
};

export default DisplayMovies;

const StyledContainer = styled("div")({
  backgroundColor: "#3d5ee0",
  display: "flex",
  flexDirection: "column",
  margin: "20px",  
  marginLeft: "10rem",
  marginRight: "10rem",
  gap: "2rem",
  padding: "20px",
  borderRadius: "10px",
});
