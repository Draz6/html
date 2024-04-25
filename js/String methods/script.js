//=============================== String methods ==============================================

// 1. Movie Title Capitalization
const movieTitle = 'the dark knight';
let newMovieTitle = movieTitle.split(" ")
let capitalFirstLeter = []
for (let i = 0; i < newMovieTitle.length; i++) {
 capitalFirstLeter.push(newMovieTitle[i].charAt(0).toUpperCase() + newMovieTitle[i].slice(1));
}
capitalFirstLeter = capitalFirstLeter.toString().replace(/,/g, " ");
console.log(capitalFirstLeter);

// 2. Search Bar
const movieTitles = ['The Dark Knight', 'Inception', 'Interstellar'];
const query = 'In';
let filterMovieTitles = []
for (let i = 0; i < movieTitles.length; i++) {
    movieTitles[i].includes(query)? filterMovieTitles.push(movieTitles[i]) :'';  
}
console.log(filterMovieTitles);

// 3. Director's Name Format
const directorName = 'Nolan, Christopher';
let newDirector = [];
newDirector.push(directorName.split(" ").reverse());
newDirector = newDirector.toString().replace(/,/g,' ');
console.log(newDirector);

// 4. Movie Length
const movieLength = '2h 30min';
const movieTime = movieLength.split(" ");
const hour = parseInt(movieTime[0]);
const minutes = parseInt(movieTime[1]);
console.log(`Movie length : ${hour} hours and ${minutes} minutes`);

// 5. Movie Initials
const titleForInitials = 'The Dark Knight';
let newTitle = [titleForInitials[0]]
for (let i = 0; i < titleForInitials.length; i++) {
  if (titleForInitials[i] == " ") {
    newTitle.push(titleForInitials[i+1])
  }
} 
newTitle = newTitle.toString().replace(/,/g,'')
console.log(newTitle);
// 6. Format Movie Information String
let movieDetails = 'Inception|Christopher Nolan|Sci-Fi';
const newMovieDetails = movieDetails.replace("|", ", Directed by ").replace("|", ", genre: ");
console.log(newMovieDetails);

// 7. Movie Slug
let titleForSlug = 'The Dark Knight';
titleForSlug = titleForSlug.replace(/ /g, "-")
console.log(titleForSlug);

// 8. Synopsis Trimming
const synopsis =
  'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO. But his tragic past may doom the project and his team to disaster.';
const maxSynopsisLength = 101;
const newSynopsis = synopsis.substring(1,maxSynopsisLength)
console.log(newSynopsis.length);

// 9. Genre List
const genres = 'Action,Adventure,Sci-Fi';
const genresArr = genres.split(',')
console.log(genresArr);

