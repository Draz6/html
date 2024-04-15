// if else

//1

const movieRating = 6;
if (movieRating > 7) {
    console.log("Highly rated movie");
}
else console.log("this movie has room for improvement");

//2
const movieBuget = 20;
if (movieBuget >= 1 && movieBuget <= 100) {
    console.log("Big buget movie");
}
else console.log("Indie mov");

//3
const movieGenre = "action";
const audienceAge = 30;
if (movieGenre == "horror" && audienceAge >= 18) {
    console.log("Suitable for the audience");
}
else if (movieGenre == "horror" && audienceAge < 18) {
    console.log("Not suitable for the audience");
}
else console.log("Suitable for all audience");

//4
const firstMovieDuration = 60;
const secondMovieDuration = 75;
if (firstMovieDuration === secondMovieDuration) {
    console.log("Movies have the same duration");
}
else if (firstMovieDuration > secondMovieDuration) {
    console.log('The first movie is longer');
}
else console.log('The second movie is longer');


//5
const viewerAge = 21;
if (viewerAge >= 13 && viewerAge <= 18) {
    console.log("Suitable for teens");
}
else if (viewerAge > 18) {
    console.log('Suitable for adults');
}
else console.log('Suitable for kids');

//6
const popularityScore = 50;
const resultScore = popularityScore >= 80 ? "popular movie" : "less know movie"
console.log(resultScore);

//9
const hasInvitaion = true;
const invitation = hasInvitaion ? "welcome to the premiere" : "please check your invitation"
console.log(invitation);

//16
const movieTitle = "last-day"
if (movieTitle.includes(2)) {
    console.log("this movie is sequel");

} else {
    console.log("this movie is no sequel");
}

/*---------------------------------------------Switch---------------------------------*/

//1
const dayOfWeek = 2;
switch (dayOfWeek) {
    case 1:
        console.log("sunday");
        break;

    case 2:
        console.log("monday");
        break;

    default:
        console.log("happy day");
        break;
}

//2
const themeColor = "dark";
switch (themeColor) {
    case "light":
        console.log("light mood");
        break;

    case "dark":
        console.log("dark mood");
        break;

    case "night":
        console.log("night mood");
        break;

    default:
        console.log("gold mood");
        break;
}

//5
const audienceScore = 95;


switch (true) {
    case audienceScore >= 90:
        console.log("Must Watch");
        break;

    case audienceScore >= 75 && audienceScore <= 89:
        console.log("Recommended");
        break;

    case audienceScore >= 60 && audienceScore <= 74:
        console.log("Mixed Reviews");
        break;

    case audienceScore < 60:
        console.log("Skip it");
        break;
    default:
        console.log("null");
}

//6
const userInput = "3";
switch (typeof (userInput)) {
    case "string":
        console.log("string");
        break;

    case "number":
        console.log("number");
        break;

    case "boolean":
        console.log("boolean");
        break;
    default:
        console.log("null");

}
//7
const releaseMonth = new Date().getMonth() + 1;
switch (releaseMonth) {
    case 1:
    case 2:
    case 3:
        console.log("Q1");
        break;

    case 4:
    case 5:
    case 6:
        console.log("Q2");
        break;

    case 7:
    case 8:
    case 9:
        console.log("Q3");
        break;

    case 10:
    case 11:
    case 12:
        console.log("Q4");
        break;

    default:
        console.log("error");

}



