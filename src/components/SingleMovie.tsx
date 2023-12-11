import React, { FC, useState } from "react";
import Movie from "../models/Movie";
import EditMovieFrom from "./EditMovieForm";
import { styled } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

interface SingleMovieProps {
  movie: Movie;
  updateMovie: (newMovie: Movie) => void;
  deleteMovie: (id: number) => void;
}

const SingleMovie: FC<SingleMovieProps> = ({
  movie,
  updateMovie,
  deleteMovie,
}) => {
  const [edit, setEdit] = useState<boolean>(false);

  const handleToggleEdit = () => {
    setEdit((prev) => !prev);
  };

  const handleDelete = () => {
    deleteMovie(movie.id);
  };

  return (
    <StyledContainer>
      <StyledImg src={movie.img} alt={movie.title} />
      <StyledTypeography>
        <StyledH1>{movie.title}</StyledH1>
        <StyledP>
          <StarIcon />
          {movie.rating}/5
        </StyledP>
        <StyledButtons>
          <Button variant="contained" onClick={handleToggleEdit}>
            Edit
          </Button>
          <Modal
            open={edit}
            onClose={handleToggleEdit}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <EditMovieFrom
                data={movie}
                updateMovie={updateMovie}
                handleToggleEdit={handleToggleEdit}
              />
            </Box>
          </Modal>
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={handleDelete}
          >
            delete
          </Button>
        </StyledButtons>
      </StyledTypeography>
    </StyledContainer>
  );
};

export default SingleMovie;

const StyledContainer = styled("div")({
  backgroundColor: "white",
  display: "flex",
  padding: "10px",
  borderRadius: "10px",
});

const StyledTypeography = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginLeft: " 20px",
  gap: "20px",
});

const StyledP = styled("p")({
  marginLeft: "10px",
});
const StyledH1 = styled("h1")({
  wordBreak: "break-all",
});

const StyledButtons = styled("div")({
  gap: "20px",
  display: "flex",
});

const StyledImg = styled("img")({
  width: "200px",
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
