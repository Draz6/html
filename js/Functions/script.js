//======================================= Impure Function =========================================
//1 Initialize Movie Ratings
const movieRatings = [];

function addRaiting() {
  movieRatings.push(["red", 8]);
}
//addRaiting();


//2 Add Movie Ratings =======================================

function addRaiting(movieTitle, rating) {
  movieRatings.push([movieTitle, rating]);
}
addRaiting("golden dog", 5);
addRaiting("sky", 10);
addRaiting("pop", 7);
console.log(movieRatings);

//3 Find a Movie Ratings =====================================
function findRating(movieTitle) {
  for (let i = 0; i < movieRatings.length; i++) {
    if (movieRatings[i][0] === movieTitle) {
      console.log(
        `Movie : ${movieRatings[i][0]} - Raiting : ${movieRatings[i][1]}`
      );
      return;
    }
  }
  console.log("movie not found");
}
findRating("golden dog");

//4  Update a Movie Ratings ==================================
function updateRating(movieTitle, newRaiting) {
  for (let i = 0; i < movieRatings.length; i++) {
    if (movieRatings[i][0] === movieTitle) {
      movieRatings[i][1] = newRaiting;
      console.log(
        `Movie : ${movieRatings[i][0]} - New Raiting : ${movieRatings[i][1]}`
      );
      return;
    }
  }
  console.log("movie not found");
}
updateRating("golden dog", 9);

//5 Remove a Movie Ratings ===================================
function removeRating(movieTitle) {
  for (let i = 0; i < movieRatings.length; i++) {
    if (movieRatings[i][0] === movieTitle) {
      delete movieRatings[i];
      console.log(movieRatings);
      return;
    }
  }
  console.log("movie not found");
}
//removeRating("pop");

//6 List All Movies and  Ratings ==============================
function listMovies() {
  for (let i = 0; i < movieRatings.length; i++) {
    console.log(
      `Movie Title: ${movieRatings[i][0]}  Raiting: ${movieRatings[i][1]}`
    );
  }
}
listMovies();
console.log(movieRatings);

//7 Find highest rated movie ==================================
let highestRate = movieRatings[0][1];
function highestRatedMovie() {
  for (let i = 0; i < movieRatings.length; i++) {
    if (movieRatings[i][1] > highestRate) {
      highestRate = movieRatings[i][1];
    }
  }
  for (let i = 0; i < movieRatings.length; i++) {
    if (movieRatings[i][1] === highestRate) {
      console.log(
        `The movie with the highest rating:  ${movieRatings[i][0]} {${highestRate}}`
      );
      return;
    }
  }
  console.log("No rating");
}
highestRatedMovie();

//================================= pure function ==============================

//1 Average Rating
const numbers = [3, 4, 5, 3, 5];

function calculateAverageRating() {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  const average = total / numbers.length;
  return average;
}
calculateAverageRating();

//2 Filter movies by rating ==============================
function filterByRating() {
  let newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 4) {
      newNumbers.push(numbers[i]);
    }
  }
  return newNumbers;
}
filterByRating();

//3 Find highest rated movie =============================
function findHighestRating() {
  let highestRating = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > highestRating) {
      highestRating = numbers[i];
    }
  }
  console.log(highestRating);
  return highestRating;
}
findHighestRating();

//4 Ratings Above Threshold ==============================
function ratingsAboveThershold(numbers, threshold) {
  const newNumbers2 = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > threshold) {
      newNumbers2.push(numbers[i]);
    }
  }
  console.log(newNumbers2);
  return newNumbers2;
}
ratingsAboveThershold([3, 4, 5, 2, 1, 5], 3);

//5 Count Movies in rating range =========================
function countInRatingRange(numbers, lower, upper) {
  const InRatingRange = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= lower && numbers[i] < upper) {
      InRatingRange.push(numbers[i]);
    }
  }
  console.log(InRatingRange);
  return InRatingRange;
}
countInRatingRange([3, 4, 5, 2, 1, 5], 4, 5);

//6 Filter unique ratings ===============================
function uniqueRatings(ratings) {
  const uniqueRaiting = [];
  for (let i = 0; i < ratings.length; i++) {
    if (uniqueRaiting.indexOf(ratings[i]) === -1) {
      uniqueRaiting.push(ratings[i]);
    }
  }
  console.log(uniqueRaiting);
  return uniqueRaiting;
}
uniqueRatings([5, 3, 4, 3, 5, 4, 5]);

//7 Merge ratings =======================================
function mergeRatings(rating1, rating2) {
  const ratings = rating1.concat(rating2);
  const uniqueRaiting = [];
  for (let i = 0; i < ratings.length; i++) {
    if (uniqueRaiting.indexOf(ratings[i]) === -1) {
      uniqueRaiting.push(ratings[i]);
    }
  }
  console.log(uniqueRaiting);
  return uniqueRaiting;
}
mergeRatings([5, 3, 4], [2, 3, 5]);

//8 Ratings differential ================================
function ratingsDifferential(rating1, rating2) {
  let sumRating1 = 0;
  let sumRating2 = 0;
  for (let i = 0; i < rating1.length; i++) {
    sumRating1 += rating1[i];
  }
  for (let i = 0; i < rating2.length; i++) {
    sumRating2 += rating2[i];
  }
  const averageRating1 = sumRating1 / rating1.length;
  const averageRating2 = sumRating2 / rating2.length;
  let averageDifference;
  averageRating1 > averageRating2
    ? (averageDifference = averageRating1 - averageRating2)
    : (averageDifference = averageRating2 - averageRating1);
  /* if(averageRating1 > averageRating2){
       averageDifference = averageRating1 - averageRating2;
  }
  else if (averageRating2 > averageRating1){
    averageDifference = averageRating2 - averageRating1;
  }
  else console.log("No difference");*/
  console.log(averageDifference);
  return averageDifference;
}
ratingsDifferential([4, 4, 4, 4, 5], [3, 3, 3, 3]);

//9 Filter ratings by multiple criteria ==================
function filterRatingsByCriteria(ratings, greaterThan, lessThan) {
  let filterRatingsArr = [];
  for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] > greaterThan && ratings[i] < lessThan) {
      filterRatingsArr.push(ratings[i]);
    }
  }
  console.log(filterRatingsArr);
  return filterRatingsArr;
}
filterRatingsByCriteria([1, 2, 3, 4, 5], 2, 5);

//===================================== Bonus Exercises =================================

//1
function sortRatings(ratings) {
  let sortArray = [];
  for (let i = 0; i < ratings.length; i++) {}
  sortArray = ratings.reverse();
  console.log(sortArray);
}
sortRatings([5, 3, 4, 2, 1]);

//====================================== Arrow Function =================================

// 1. Simple Arrow Function Conversion
const getMovies = (movies) => movies.map(movie => movie.title);

// 2. Control Flow in Arrow Functions
const averageMovieRating = (rating) =>{
  if (rating > 7) {
    return "Good";
  } else if (rating > 5) {
    return "Average";
  } else {
    return "Bad";
  }
}
console.log(averageMovieRating(10));

// 3. Arrow Functions with Multiple Operations
const getTotalMovieLength = (movies) =>{
  let totalLength = 0;
  for (let i = 0; i < movies.length; i++) {
    totalLength += movies[i].length;
  }
  return 'Total movie length is ' + totalLength + ' minutes';
}

// 4. Arrow Functions as Callbacks
const sortedMovies = movies.sort((a,b) => b.averageRating - a.averageRating);

// 5. Implicit Return with Arrow Functions
const getMovieTitles = (movies) => {return movies.map((movie) => movie.title)}

