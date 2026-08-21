# Movie Watchlist API

A simple REST API built with Node.js and Express.js for managing a movie watchlist.

The API allows users to view movies, search and filter movies, add new movies, update existing movies, and delete movies.

The project also includes a PostgreSQL relational database design for users, profiles, movies, genres, and movie-genre relationships.

For this stage of the project, the PostgreSQL database is not yet connected to the Express API.

## Technologies Used

* Node.js
* Express.js
* JavaScript ES Modules
* PostgreSQL
* pgAdmin
* SQL
* Thunder Client
* Git
* GitHub

## Features

* Get all movies
* Get one movie by ID
* Create a movie
* Update a movie
* Delete a movie
* Filter movies by watched status
* Filter movies by genre
* Search movies by title
* Request logging middleware
* Movie validation middleware
* API key middleware
* 404 route handling
* Health check endpoint
* PostgreSQL relational database design
* SQL CRUD operations
* SQL filtering and searching
* SQL JOIN queries
* One-to-one relationships
* One-to-many relationships
* Many-to-many relationships

## Project Structure

```text
movie-watchlist-api/
│
├── src/
│   ├── server.js
│   ├── data/
│   │   └── movies.js
│   ├── routes/
│   │   └── movie.routes.js
│   └── middleware/
│       ├── requestLogger.js
│       ├── requireApiKey.js
│       ├── validateMovie.js
│       └── notFound.js
│
├── database/
│   ├── schema.sql
│   ├── seed.sql
│   └── queries.sql
│
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

## Installation

Clone the repository and install the dependencies:

```bash
npm install
```

## Database Design

The project uses PostgreSQL to demonstrate relational database design.

The database contains five tables:

* `users`
* `profiles`
* `movies`
* `genres`
* `movie_genres`

### Users

The `users` table stores basic user information.

Fields:

* `id`
* `name`
* `email`

`id` is the primary key.

The email field is unique.

### Profiles

The `profiles` table stores additional information about a user.

Fields:

* `id`
* `bio`
* `country`
* `user_id`

`id` is the primary key.

`user_id` is a foreign key that references `users.id`.

Because `user_id` is unique, one user can have only one profile.

### Movies

The `movies` table stores movies in users' watchlists.

Fields:

* `id`
* `title`
* `watched`
* `rating`
* `user_id`

`id` is the primary key.

`user_id` is a foreign key that references `users.id`.

One user can have many movies.

### Genres

The `genres` table stores movie genres.

Fields:

* `id`
* `name`

`id` is the primary key.

Genre names are unique.

### Movie Genres

The `movie_genres` table connects movies and genres.

Fields:

* `movie_id`
* `genre_id`

`movie_id` references `movies.id`.

`genre_id` references `genres.id`.

Together, `movie_id` and `genre_id` form a composite primary key.

## Database Relationships

### One-to-One

A user has one profile.

```text
User ───── Profile
```

The relationship is created through:

```text
profiles.user_id → users.id
```

### One-to-Many

One user can have many movies.

```text
User
 │
 ├── Movie
 ├── Movie
 └── Movie
```

The relationship is created through:

```text
movies.user_id → users.id
```

### Many-to-Many

A movie can have many genres, and a genre can belong to many movies.

The `movie_genres` junction table is used to represent this relationship.

```text
Movies ──< Movie_Genres >── Genres
```

## Relationship Diagram

```text
User ───── Profile
  │
  └────< Movies >────< Movie_Genres >──── Genres
```

## Database Files

### schema.sql

Contains the SQL used to create:

* tables
* primary keys
* foreign keys
* constraints
* relationships

### seed.sql

Contains sample data for:

* users
* profiles
* movies
* genres
* movie-genre relationships

### queries.sql

Contains SQL examples for:

* CREATE
* READ
* UPDATE
* DELETE
* filtering
* searching
* sorting
* JOIN queries
* relationship queries
