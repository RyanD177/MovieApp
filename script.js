const API_KEY = "api_key=0a9a4bef069438376f2d8da0b09c8968"
const BASE_URL ="https://api.themoviedb.org/3/";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
console.log(API_URL);


const getMovies = (url) => {
    fetch(url).then(Response => Response.json()).then(moviedata => {
        console.log(moviedata);

    })



}
getMovies(API_URL);