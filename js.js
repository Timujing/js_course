'use sctrict'

// Add modification

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastMovie = prompt('Один из последних просмотренных фильмов?', '');
let movieGraduate = prompt('оценка фильма?', '');

personalMovieDB.movies[lastMovie] = movieGraduate;
console.log(personalMovieDB);