function validateMovie(req, res, next) {
  const { title, genre, watched, rating } = req.body;

  if (typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({
      message: "title must be a non-empty string"
    });
  }

  if (typeof genre !== "string" || genre.trim() === "") {
    return res.status(400).json({
      message: "genre must be a non-empty string"
    });
  }

  if (watched !== undefined && typeof watched !== "boolean") {
    return res.status(400).json({
      message: "watched must be a boolean"
    });
  }

  if (
    rating !== undefined &&
    rating !== null &&
    (typeof rating !== "number" || rating < 1 || rating > 5)
  ) {
    return res.status(400).json({
      message: "rating must be null or a number from 1 to 5"
    });
  }

  next();
}

function validateMovieUpdate(req, res, next) {
  const { title, genre, watched, rating, id } = req.body;

  if (id !== undefined) {
    return res.status(400).json({
      message: "id cannot be changed"
    });
  }

  if (
    title !== undefined &&
    (typeof title !== "string" || title.trim() === "")
  ) {
    return res.status(400).json({
      message: "title must be a non-empty string"
    });
  }

  if (
    genre !== undefined &&
    (typeof genre !== "string" || genre.trim() === "")
  ) {
    return res.status(400).json({
      message: "genre must be a non-empty string"
    });
  }

  if (watched !== undefined && typeof watched !== "boolean") {
    return res.status(400).json({
      message: "watched must be a boolean"
    });
  }

  if (
    rating !== undefined &&
    rating !== null &&
    (typeof rating !== "number" || rating < 1 || rating > 5)
  ) {
    return res.status(400).json({
      message: "rating must be null or a number from 1 to 5"
    });
  }

  next();
}

export { validateMovie, validateMovieUpdate };