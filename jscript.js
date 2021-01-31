"use strict";

const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", '');
const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


// for (let i = 0; i<numberOfFilms; i++) {
//     const a = prompt("Назовите один из недавно просмотренных фильмов?", ''),
//           b = prompt("Какой рейтинг Вы бы дали этому фильму?", '');

    // if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length <= 3) {
    //     personalMovieDb.movies[a] = b;

    // }else  {
    //     console.log('error with film Data');
    //     i--;
    // }
// }
// это один из вариантов написания цикла, снизу написан второй вариант этого же цикла

let i = 0;
while (i<numberOfFilms) {
    const a = prompt("Назовите один из недавно просмотренных фильмов?", ''),
          b = prompt("Какой рейтинг Вы бы дали этому фильму?", '');
          i++;
    
    if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length <= 3) {
            personalMovieDb.movies[a] = b;
    
    }else {
        console.log('error with film Data');
            i--;
    }
        

}

if (personalMovieDb.count < 5) {
    console.log("Просмотрено довольно мало фильмов..");
}else if (personalMovieDb.count >= 5 && personalMovieDb.count <= 10) {
    console.log("Отлично, но соседи смотрят больше фильмов!:)");
}else if (personalMovieDb.count >10) {
    console.log("Да Вы киноман!!!");
}else {
    console.log('error with film count Data');

}


console.log(personalMovieDb);