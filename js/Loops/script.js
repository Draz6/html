// loops

//1 Find longest Title
const movieTitles1 = ["Inception", "The Dark Knight", "Interstellar"];
let titleLength = 0;
let longestTitle;
for (let i = 0; i < movieTitles1.length; i++) {
  if (titleLength < movieTitles1[i].length) {
    titleLength = movieTitles1[i].length;
    longestTitle = movieTitles1[i];
  }
}
console.log(longestTitle);

// 2. Calculate the Average Rating
const movieRatings = [8.3, 7.5, 9.0, 8.7];
let total = 0;
for (let i = 0; i < movieRatings.length; i++) {
  total += movieRatings[i];
}
const average = total / movieRatings.length;
console.log(average);

// 3. Reverse the Movie List
const movieTitles = ["Inception", "The Dark Knight", "Interstellar"];
const newMovieTitles = [];
for (let i = 0; i < movieTitles.length; i++) {
  newMovieTitles.push(movieTitles.reverse()[i]);
}
console.log(newMovieTitles);

// 4. Increase Movie Ratings
const movieRatings2 = [8.3, 7.5, 9.0, 8.7];
const newMovieRatings2 = [];
for (let i = 0; i < movieRatings2.length; i++) {
  newMovieRatings2.push(movieRatings2[i] + 0.5);
}
console.log(newMovieRatings2);

// 5. Filter Movies by High Ratings
const movieRatings3 = [8.3, 7.5, 9.0, 8.7];
const newMovieRatings3 = [];
for (let i = 0; i < movieRatings3.length; i++) {
  movieRatings3[i] > 8 ? newMovieRatings3.push(movieRatings3[i]) : "";
}
console.log(newMovieRatings3);

// 6. Count a Specific Rating's Occurrence
const movieRatings4 = [8.3, 8.7, 9.0, 8.7, 8.3];
const specificRating4 = 8.7;
let count = 0;
for (let i = 0; i < movieRatings4.length; i++) {
  if (movieRatings4[i] === specificRating4) {
    count++;
  }
}
console.log(count);

// 7. Find Movies in Both Watched and Wish Lists
const watchedList = ["Inception", "The Dark Knight"];
const wishList = ["Interstellar", "Inception"];
let newLlist = [];
for (let i = 0; i < watchedList.length; i++) {
  if (watchedList[i] === "Inception") {
    newLlist.push(watchedList[i]);
  }
}
console.log(newLlist);

// 8. Check Ratings Against a Threshold
const movieRatings5 = [8.3, 7.5, 9.0, 8.7];
const minRating5 = 8.0;
let isAbove = true;
for (let i = 0; i < movieRatings5.length; i++) {
  if (movieRatings5[i] < minRating5) {
    isAbove = false;
  }
}
console.log(isAbove);

// 9. Identify the Maximum Rating
const movieRatings6 = [8.3, 7.5, 9.0, 8.7];
let highestRate = movieRatings6[0];
for (let i = 0; i < movieRatings6.length; i++) {
  if (movieRatings6[i] > highestRate) {
    highestRate = movieRatings6[i];
  }
}
console.log(highestRate);

// 10. Find the Highest Rating
const movieRatings7 = [8.3, 7.5, 9.0, 8.7];
let highestRating = movieRatings7[0];
for (let i = 1; i < movieRatings7.length; i++) {
  if (movieRatings7[i] > highestRating) {
    highestRating = movieRatings7[i];
  }
}
console.log(highestRating);
