import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import Movie from "../models/Movie";
import { Button, TextField, styled } from "@mui/material";

interface EditMovieFormProps {
  data: Movie;
  updateMovie: (newMovie: Movie) => void;
  handleToggleEdit: () => void;
}

const EditMovieFrom: FC<EditMovieFormProps> = ({
  data,
  updateMovie,
  handleToggleEdit,
}) => {
  const [editMovie, setEditMovie] = useState<Movie>(data);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditMovie({
      ...editMovie,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    const { title, rating, img } = editMovie;

    if (title && rating && img) {
      updateMovie(editMovie);
      handleToggleEdit();
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
        value={editMovie.title}
      />
      <TextField
        id="standard-basic"
        label="Rating"
        variant="standard"
        type="number"
        name="rating"
        placeholder="enter price..."
        onChange={handleChange}
        value={editMovie.rating}
      />
      <TextField
        id="standard-basic"
        label="IMG"
        variant="standard"
        type="text"
        name="img"
        placeholder="enter image..."
        onChange={handleChange}
        value={editMovie.img}
      />
      <Button variant="contained" type="submit">
        Save
      </Button>
    </StyledForm>
  );
};

export default EditMovieFrom;

const StyledForm = styled("form")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "10px",
  gap: "10px",
});
