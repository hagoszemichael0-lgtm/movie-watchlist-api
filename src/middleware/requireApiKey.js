function requireApiKey(req, res, next) {
  const apiKey = req.headers["x-api-key"];

  if (apiKey !== "movie-class-2026") {
    return res.status(403).json({
      message: "Forbidden: valid API key required"
    });
  }

  next();
}

export default requireApiKey;