import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import Movie from "../models/Movie";
import TextField from "@mui/material/TextField";
import { Button, styled } from "@mui/material";

interface AddMovieFormProps {
  addMovie: (newMovie: Movie) => void;
}

interface MovieInit {
  title: string;
  rating: number;
  img: string;
}

const initialState: MovieInit = {
  title: "",
  rating: 0,
  img: "",
};

const AddMovieForm: FC<AddMovieFormProps> = ({ addMovie }) => {
  const [newMovie, setNewMovie] = useState<MovieInit>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNewMovie({
      ...newMovie,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    const { title, rating, img } = newMovie;

    if (title && rating && img) {
      addMovie({ title, rating: Number(rating), img, id: Date.now() });
      setNewMovie(initialState);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <TextField
        id="standard-basic"
        label="Title"
        variant="standard"
        type="text"
        name="title"
        placeholder="enter title..."
        onChange={handleChange}
        value={newMovie.title}
        required
      />
      <TextField
        id="standard-basic"
        label="Rating"
        variant="standard"
        type="number"
        name="rating"
        placeholder="enter raiting..."
        onChange={handleChange}
        value={newMovie.rating}
        required
      />
      <TextField
        id="standard-basic"
        label="IMG"
        variant="standard"
        type="text"
        name="img"
        placeholder="enter image..."
        onChange={handleChange}
        value={newMovie.img}
        required
      />
      <Button variant="contained" type="submit">
        + Добавить
      </Button>
    </StyledForm>
  );
};

export default AddMovieForm;

const StyledForm = styled("form")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "10px",
  gap: "10px",
});
