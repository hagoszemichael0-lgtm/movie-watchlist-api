# Movie Watchlist API

A simple REST API built with Node.js and Express.js for managing a movie watchlist.

The API allows users to view movies, search and filter movies, add new movies, update existing movies, and delete movies.

Movies are stored temporarily in a JavaScript array. No database is used in this version of the project.

## Technologies Used

- Node.js
- Express.js
- JavaScript ES Modules
- Thunder Client
- Git and GitHub

## Features

- Get all movies
- Get one movie by ID
- Create a movie
- Update a movie
- Delete a movie
- Filter movies by watched status
- Filter movies by genre
- Search movies by title
- Request logging middleware
- Movie validation middleware
- API key middleware
- 404 route handling
- Health check endpoint

## Project Structure

movie-watchlist-api/

- src/
  - server.js
  - data/
    - movies.js
  - routes/
    - movie.routes.js
  - middleware/
    - requestLogger.js
    - requireApiKey.js
    - validateMovie.js
    - notFound.js
- package.json
- package-lock.json
- README.md
- .gitignore

## Installation

Clone the repository and install the dependencies:

```bash
npm install