//arrays

//1
const movieLibrary = ["Inception", "The Matrix", "Interstellar"];
const movieToCheck = "Inception";
console.log(movieLibrary.includes(movieToCheck)); //true

//2
const releaseDates = ["1999", "2010", "2014"];
const newReleaseDates = releaseDates.reverse();
console.log(newReleaseDates);

//3
const movieGenre = ["Sci-Fi", "Action", "adventure"];
const newMovieGenrse = movieGenre.join(",");
console.log(newMovieGenrse);

//4
const movieGenres = ["Sci-Fi", "Action", "adventure"];
const genreToCheck = "Action";
console.log(movieGenres.includes(genreToCheck)); //true

//5
const movieTitles = ["Inception", "The Matrix", "Interstellar"];
const specificMovie = "Interstellar";
const theIndex = movieTitles.indexOf(specificMovie);
console.log(
  theIndex != -1 ? `Interstellar found at index ${theIndex}` : "Movie not found"
);
//6
const upcomingReleases = ["Avatar", "Dune", "Tenet"];
upcomingReleases.pop();
console.log(upcomingReleases);

//7
const classicMovies = ["The Godfather", "Citizen Kane"];
const newMovie = classicMovies.unshift("Casablanca");
console.log(classicMovies);

//8
const filmNoir = ["The Maltese Falcon", "Touch of Evil", "Double Indemnity"];
filmNoir.shift();

//9
const actionMovies = ["Die Hard", "John Wick"];
const comedyMovies = ["Superbad", "The Hangover"];
const catg = actionMovies.concat(comedyMovies);
console.log(catg);

//10

const movieTitles2 = ["Inception", "The Matrix", "Interstellar"];
console.log(movieTitles2.sort());

//11
const quotesString =
  "I'll be back, May the Forcewith you, To infinity and beyond";
console.log(quotesString.split(","));

//12
const topMovies = [
  "The Shawshank Redemption",
  "The Godfather",
  "The dark Knight",
];
const n = 2;
const newTopMovies = topMovies.slice(n);

//13
const movieWishlist = ["The Matrix 4", "Avatar 2", "Dune"];
const emptyArray = movieWishlist.splice(movieWishlist.length);
console.log(emptyArray);

//14
const movies1 = ["Inception", "Interstellar"];
movies1.push("Tente");

//15
const movies = ["Inception", "Interstellar", "tenet"];
movies.shift();
console.log(movies);

//16
const movies2 = ["Inception", "Interstellar", "tenet"];
movies2.join(",");

//17
const movies3 = ["Inception", "Interstellar", "tenet"];
const movieToFind = "Interstellar";
console.log(`the index of Interstellar is ${movies3.indexOf(movieToFind)}`);

//18
const movies4 = ["Inception", "Interstellar", "tenet"];
movies4.reverse();

//19
const releaseYears = [2001, 2023, 1998, 2014];
releaseYears.sort();
console.log(releaseYears);
