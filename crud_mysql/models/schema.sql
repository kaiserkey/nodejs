DROP DATABASE IF EXISTS movies;

CREATE DATABASE IF NOT EXISTS movies;

USE movies;

CREATE TABLE IF NOT EXISTS Movie(
    movie_id VARCHAR(9) PRIMARY KEY,
    title VARCHAR(100),
    released VARCHAR(4),
    rating DECIMAL(2,1),
    image VARCHAR(255)
)