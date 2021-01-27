"use strict";

const numberOfFilms = +prompt("How much films have you already wathed?", '');
const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("One of the nearly watched films?", ''),
      b = prompt("What's your rate of this film?", ''),
      c = prompt("One of the nearly watched films?", ''),
      d = prompt("What's your rate of this film?", '');

personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;

console.log(personalMovieDb);