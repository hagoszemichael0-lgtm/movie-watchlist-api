import express from "express";
import movies from "../data/movies.js";
import requireApiKey from "../middleware/requireApiKey.js";
import {
  validateMovie,
  validateMovieUpdate
} from "../middleware/validateMovie.js";

const router = express.Router();


// GET all movies
router.get("/", (req, res) => {
  let results = [...movies];

  const { watched, genre, search } = req.query;

  if (watched === "true") {
    results = results.filter((movie) => movie.watched === true);
  }

  if (watched === "false") {
    results = results.filter((movie) => movie.watched === false);
  }

  if (genre) {
    results = results.filter(
      (movie) =>
        movie.genre.toLowerCase() === genre.toLowerCase()
    );
  }

  if (search) {
    results = results.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  return res.status(200).json({
    data: results
  });
});


// GET one movie by ID
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);

  const movie = movies.find((movie) => movie.id === id);

  if (!movie) {
    return res.status(404).json({
      message: "Movie not found"
    });
  }

  return res.status(200).json({
    data: movie
  });
});


// CREATE a movie
router.post(
  "/",
  requireApiKey,
  validateMovie,
  (req, res) => {
    const { title, genre, watched, rating } = req.body;

    let newId = 1;

    if (movies.length > 0) {
      newId =
        Math.max(...movies.map((movie) => movie.id)) + 1;
    }

    const newMovie = {
      id: newId,
      title: title.trim(),
      genre: genre.trim(),
      watched: watched ?? false,
      rating: rating ?? null
    };

    movies.push(newMovie);

    return res.status(201).json({
      data: newMovie
    });
  }
);


// UPDATE a movie
router.patch(
  "/:id",
  requireApiKey,
  validateMovieUpdate,
  (req, res) => {
    const id = Number(req.params.id);

    const movie = movies.find((movie) => movie.id === id);

    if (!movie) {
      return res.status(404).json({
        message: "Movie not found"
      });
    }

    const { title, genre, watched, rating } = req.body;

    if (title !== undefined) {
      movie.title = title.trim();
    }

    if (genre !== undefined) {
      movie.genre = genre.trim();
    }

    if (watched !== undefined) {
      movie.watched = watched;
    }

    if (rating !== undefined) {
      movie.rating = rating;
    }

    return res.status(200).json({
      data: movie
    });
  }
);


// DELETE a movie
router.delete(
  "/:id",
  requireApiKey,
  (req, res) => {
    const id = Number(req.params.id);

    const index = movies.findIndex(
      (movie) => movie.id === id
    );

    if (index === -1) {
      return res.status(404).json({
        message: "Movie not found"
      });
    }

    movies.splice(index, 1);

    return res.status(204).send();
  }
);


export default router;