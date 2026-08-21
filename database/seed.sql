INSERT INTO users (name, email)
VALUES
    ('Amina', 'amina@example.com'),
    ('Abel', 'abel@example.com'),
    ('Sara', 'sara@example.com');

INSERT INTO profiles (bio, country, user_id)
VALUES
    ('Backend development student', 'Ethiopia', 1),
    ('Movie enthusiast', 'Ethiopia', 2),
    ('Computer science student', 'Kenya', 3);


INSERT INTO movies (title, watched, rating, user_id)
VALUES
    ('Interstellar', TRUE, 5, 1),
    ('Arrival', FALSE, NULL, 1),
    ('Dune', TRUE, 4, 1),

    ('Parasite', TRUE, 5, 2),
    ('The Matrix', TRUE, 5, 2),
    ('Inception', FALSE, NULL, 2),

    ('The Dark Knight', TRUE, 5, 3),
    ('Gladiator', FALSE, NULL, 3);

INSERT INTO genres (name)
VALUES
    ('Sci-Fi'),
    ('Drama'),
    ('Adventure'),
    ('Action'),
    ('Thriller');

INSERT INTO movie_genres (movie_id, genre_id)
VALUES
    (1, 1),
    (1, 2),
    (1, 3),

    (2, 1),
    (2, 2),

    (3, 1),
    (3, 3),

    (4, 2),
    (4, 5),

    (5, 1),
    (5, 4),

    (6, 1),
    (6, 5),

    (7, 4),
    (7, 5),

    (8, 3),
    (8, 4);