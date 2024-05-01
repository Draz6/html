//=============================== Basic objects ===============================

//1
const movie = {
  title: "NNN",
  director: "John gr",
  releasYear: 1999,
  genres: ["action", "rt"],
  ratings: [8, 10, 6],
  getAverage: function getAverageRating() {},
};

//2
movie.cast = [
  { name: "Alex", role: "1" },
  { name: "Jene", role: "2" },
];

console.log(movie.genres[1]);
console.log(movie["genres"][1]);
console.log(movie.cast[1].name);
console.log(movie["cast"][1].name);

//3
movie.releasYear = 2000;
movie.ratings.push(4);
delete movie.director;
movie.cast[0].name = "Welis";
console.log(Object.hasOwn(movie, "ratings"));

//4
const movies = [
  { title: "inception", deatails: { duration: 148, rating: "PG-13" } },
  { title: "interstellar", deatails: { duration: 169, rating: "PG-13" } },
];

function getDurationAverage() {
  let sum = 0;
  for (const item of movies) {
    sum += item.deatails.duration;
  }
  const average = sum / movies.length;
  return average;
}
getDurationAverage();

//5
const newMovie = { ...movies[0], ...movies[1] };
console.log(newMovie);

//6
const movieDeatails = {
  title: "inception",
  director: "christopher Nolan",
  releaseYear: 2010,
  ratings: [8, 9, 9.5, 8.5],
};
function logMovieDeatails() {
  console.log(Object.keys(movieDeatails));
  console.log(Object.values(movieDeatails));
}
logMovieDeatails();

//7
const movieCollecction = {
  Inception: 9,
  interstellar: 8.5,
  "The Dark Knight": 9.5,
  Prestige: 8,
};
function increaseMovieRating() {
  Object.keys(movieCollecction).forEach((item) => {
    if (movieCollecction[item] < 7) {
      movieCollecction[item] = movieCollecction[item] + 1;
    }
  });
}
increaseMovieRating();

//8
const movies2 = {
  1: { title: "Inception", year: 2010, rating: 9 },
  2: { title: "The Matrix", year: 1999, rating: 8.5 },
  3: { title: "Interstellar", year: 2014, rating: 8.6 },
};
function returnNewerMovie() {
  Object.entries(movies2).forEach((item) => {
    if (item[1].year > 2000) {
      item[1].isNewer = true;
      return item[1];
    }
  });
}
returnNewerMovie();

// 9
const genreRatings = {
  action: [8, 9, 7, 10, 8.5],
  sciFi: [8.5, 8, 9, 9.5, 7.5],
  drama: [7, 7.5, 8, 8.5, 9],
};
function genreRatingsAverage() {
  let sum = 0;
  let average = 0;
  Object.keys(genreRatings).forEach((item) => {
    for (let i = 0; i < genreRatings[item].length; i++) {
      sum += genreRatings[item][i];
    }
    average = sum / genreRatings[item].length;
    console.log(`Genre Name: ${item}  -  Average: ${average}`);
  });
}
genreRatingsAverage();

// 10
const movieAwards = {
  Inception: "Best Visual Effects",
  Interstellar: "Best Visual Effects",
  "The Dark Knight": "Best Supporting Actor",
  Prestige: "Best Cinematography",
};

function creatNewMovieAwardsObject() {
  const newObject = Object.entries(movieAwards);
  let newMovieAwards = [];
  for (let i = 0; i < newObject.length; i++) {
    newMovieAwards.push(newObject[i].reverse());
  }
  newMovieAwards = Object.fromEntries(newMovieAwards);
  console.log(newMovieAwards);
}
creatNewMovieAwardsObject();

//=============================== Objects ===============================

//Exercise 1: Creating the Movie Database
const movieDatabase = {
  movies: [],
  addMovie,
  removeMovie,
  addRating,
  removeRating,
  calculateAverageRating,
  searchMovie,
};

function addMovie(movieTitle) {
  let movie = {
    title: movieTitle,
    ratings: [],
    averageRating: 0,
  };
  movieDatabase.movies.push(movie);
}
addMovie("last day");

function removeMovie(movieTitle) {
  if (movieTitle === movieDatabase.movies[0].title) {
    delete movieDatabase.movies[0];
  }
}
removeMovie();

//Exercise 2: Adding and Removing Ratings

function addRating(movieTitle, rating) {
  if (movieTitle === movieDatabase.movies[0].title) {
    movieDatabase.movies[0].ratings.push(rating);
  }
}
addRating("last day", [8, 7, 10]);

function removeRating(movieTitle, rating) {
  if (
    movieTitle === movieDatabase.movies[0].title &&
    movieDatabase.movies[0].ratings[0] === rating
  ) {
    delete movieDatabase.movies[0].ratings[0];
  }
}
removeRating();

//Exercise 3: Calculating Average Ratings
function calculateAverageRating(movieTitle) {
  let sum = 0;
  let average = 0;
  if (movieTitle === movieDatabase.movies[0].title) {
    let movieRatings = movieDatabase.movies[0].ratings[0];

    for (let i = 0; i < movieRatings.length; i++) {
      sum += movieRatings[i];
    }
    average = sum / movieRatings.length;
  }
  movieDatabase.movies[0].averageRating = average;
  console.log(average);
}
calculateAverageRating("last day");

//Exercise 4: Searching Movies
function searchMovie(movieName) {
  let searchRus = [];
  let movie = movieDatabase.movies;
  for (let i = 0; i < movie.length; i++) {
    if (movieDatabase.movies[i].title === movieName) {
      searchRus.push(movieDatabase.movies[i].title);
    }
  }
  console.log(searchRus);
  return searchRus;
}
searchMovie("last day");
console.log(movieDatabase);
