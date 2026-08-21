INSERT INTO users (name, email)
VALUES ('Daniel', 'daniel@example.com');

INSERT INTO profiles (bio, country, user_id)
VALUES (
    'Movie lover',
    'Ethiopia',
    (SELECT id FROM users WHERE email = 'daniel@example.com')
);

INSERT INTO movies (title, watched, rating, user_id)
VALUES (
    'Blade Runner 2049',
    FALSE,
    NULL,
    (SELECT id FROM users WHERE email = 'daniel@example.com')
);

INSERT INTO genres (name)
VALUES ('Mystery');

INSERT INTO movie_genres (movie_id, genre_id)
VALUES (
    (SELECT id FROM movies WHERE title = 'Blade Runner 2049'),
    (SELECT id FROM genres WHERE name = 'Sci-Fi')
);

SELECT * FROM users;

SELECT * FROM movies;

SELECT * FROM movies
WHERE id = 1;

SELECT * FROM movies
WHERE watched = TRUE;

SELECT * FROM movies
WHERE watched = FALSE;

SELECT * FROM movies
WHERE rating >= 4;

SELECT * FROM genres;
UPDATE users
SET name = 'Daniel Tesfaye'
WHERE email = 'daniel@example.com';

UPDATE profiles
SET bio = 'Backend developer and movie lover',
    country = 'Ethiopia'
WHERE user_id = (
    SELECT id FROM users
    WHERE email = 'daniel@example.com'
);

UPDATE movies
SET watched = TRUE
WHERE title = 'Blade Runner 2049';

UPDATE movies
SET rating = 5
WHERE title = 'Blade Runner 2049';


DELETE FROM movie_genres
WHERE movie_id = (
    SELECT id FROM movies
    WHERE title = 'Blade Runner 2049'
)
AND genre_id = (
    SELECT id FROM genres
    WHERE name = 'Sci-Fi'
);

DELETE FROM movies
WHERE title = 'Blade Runner 2049';


SELECT
    users.name,
    users.email,
    profiles.bio,
    profiles.country
FROM users
JOIN profiles
ON users.id = profiles.user_id;


SELECT
    users.name,
    movies.title,
    movies.watched,
    movies.rating
FROM users
JOIN movies
ON users.id = movies.user_id;


SELECT
    movies.title,
    genres.name AS genre
FROM movies
JOIN movie_genres
ON movies.id = movie_genres.movie_id
JOIN genres
ON movie_genres.genre_id = genres.id;


SELECT movies.*
FROM movies
JOIN users
ON movies.user_id = users.id
WHERE users.email = 'amina@example.com';


SELECT movies.*
FROM movies
JOIN users
ON movies.user_id = users.id
WHERE users.email = 'amina@example.com'
AND movies.watched = TRUE;


SELECT *
FROM movies
WHERE rating >= 4;


SELECT movies.title
FROM movies
JOIN movie_genres
ON movies.id = movie_genres.movie_id
JOIN genres
ON movie_genres.genre_id = genres.id
WHERE genres.name = 'Sci-Fi';


SELECT genres.name
FROM genres
JOIN movie_genres
ON genres.id = movie_genres.genre_id
JOIN movies
ON movies.id = movie_genres.movie_id
WHERE movies.title = 'Interstellar';


SELECT DISTINCT
    users.name,
    users.email
FROM users
JOIN movies
ON users.id = movies.user_id;


SELECT *
FROM movies
WHERE watched = FALSE;


SELECT *
FROM movies
WHERE title ILIKE '%star%';


SELECT *
FROM movies
WHERE rating = (
    SELECT MAX(rating)
    FROM movies
);


SELECT *
FROM movies
ORDER BY title ASC
LIMIT 5;


SELECT *
FROM movies
WHERE watched = FALSE
OR rating >= 4;