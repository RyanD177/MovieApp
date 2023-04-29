// Movie App, showing images and popularity 

const APIURL = "http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const imagePath = "https://image.tmdb.org/t/p/w1280";


async function getMovies () {
    const response = await fetch(APIURL);
    console.log(response);
    const responseData =  await  response.json();
    console.log(responseData)

    responseData.results.forEach(movie => {
        const {poster_path,title,vote_average} =  movie;
        
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie");
        movieElement.innerHTML =` 
        <div class="1"> 
        <img src="${imagePath + poster_path}"
        alt="${title}">
        <h3${title}</h3>
        <span>${vote_average}</span>
     </div>
     <div class="2"> 
     <img src="${imagePath + poster_path}"
     alt="${title}">
     <h3${title}</h3>
     <span>${vote_average}</span>
  </div>
  <div class="3"> 
  <img src="${imagePath + poster_path}"
  alt="${title}">
  <h3${title}</h3>
  <span>${vote_average}</span>
</div>
<div class="4"> 
<img src="${imagePath + poster_path}"
alt="${title}">
<h3${title}</h3>
<span>${vote_average}</span>
</div>
<div class="5"> 
<img src="${imagePath + poster_path}"
alt="${title}">
<h3${title}</h3>
<span>${vote_average}</span>
</div>

`
document.body.appendChild(movieElement);

    })



}

getMovies();