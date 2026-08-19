import express from "express";
import movieRouter from "./routes/movie.routes.js";
import requestLogger from "./middleware/requestLogger.js";
import notFound from "./middleware/notFound.js";

const app = express();

app.use(express.json());

app.use(requestLogger);

app.get("/api/health", (req, res) => {
  return res.status(200).json({
    message: "API is healthy"
  });
});

app.use("/api/movies", movieRouter);

app.use(notFound);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});