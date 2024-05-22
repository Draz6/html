class Movie {
 constructor(title, releaseDate, picture, rating) {
 this.title = title;
 this.releaseDate = releaseDate;
 this.picture = picture;
 this.rating = rating;
 }
 // Define getTitle, getReleaseDate, getPicture, getRating methods

}

const getHttpOptions = () => ({
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer your-bearer-token-here",
  },
});

const API_BASE_URL = "https://api.themoviedb.org/3/";

function getImage(imgPath) {

}

function fetchMovies(){
    fetch(`${API_BASE_URL}movie/popular?language=en-US&page=1`, getHttpOptions() )
    .then(response => response.json())
    .then(result => {
        result.forEach(item => {
            
        });
    })
}

createMovieCard();

fetch(`${API_BASE_URL}movie/now_playing?language=en-US&page=1`, options)
  .then((response) => response.json())
  .then((response) => {
    response.results.forEach((item) => {
      // Your code here...
    });
  })
  .catch((err) => console.error(err));



