"use strict";

const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", '');
const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i<numberOfFilms; i++) {
    const a = prompt("Назовите один из недавно просмотренных фильмов?", ''),
      b = prompt("Какой рейтинг Вы бы дали этому фильму?", '');

      personalMovieDb.movies[a] = b;
}

console.log(personalMovieDb);