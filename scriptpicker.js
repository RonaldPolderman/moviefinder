const imdbIDurl = (imdbID) => {
    const baseUrl = "https://www.imdb.com/title/";
    return (baseUrl) + (imdbID);
};
const moviesList = document.querySelector("#movie-container");

let addMoviesToDom = (movies) => {
    let AllMovieArray = movies.map(function (movie) {
        let newMovieItem = document.createElement("li");
        newMovieItem.setAttribute("title", movie.title);
        newMovieItem.setAttribute("value", movie.year);
        newMovieItem.classList.add("movieli");

        const movieLink = document.createElement("a");

        movieLink.setAttribute("href", imdbIDurl(movie.imdbID));
        newMovieItem.append(movieLink);

        const newImage = document.createElement("img");
        newImage.setAttribute("src", movie.poster);
        newImage.classList.add("poster");
        movieLink.append(newImage);
        console.log(newMovieItem);
        console.log(Array.isArray(newMovieItem));
        return newMovieItem;
    });
    AllMovieArray.forEach(function (movie) {
        moviesList.append(movie);
    });
    return AllMovieArray;
};
const resultMovies = addMoviesToDom(movies);

const switchRadioButtons = (s) => {
    const movieValue = s.target.value;
    switch (movieValue) {
        default:
            log("none");
            break;
        case "latest": filterMoviesByYear();
            break;
        case "x-men":
        case "batman":
        case "avengers":
        case "princess":
            filterMoviesByTitle(movieValue);
    }
};
let allRadioButtons = document.querySelectorAll('input[name="movies"]');
let buttonClick = () => {
    for (let button of allRadioButtons) {
        button.addEventListener("change", switchRadioButtons);
    }
};
buttonClick();

let moviesListChildren = moviesList.children;
console.log(moviesListChildren);
let filterMoviesByTitle = (wordInTitle) => {
    for (let li of moviesListChildren) {
        if (li.title.toLowerCase().includes(wordInTitle)) {
            li.style.display = 'block';
        } else {
            li.style.display = 'none';
        }
    }
}; let filterMoviesByYear = () => {
    for (let li of moviesListChildren) {
        let movieYear = parseInt(li.value);
        if (movieYear >= 2014) {
            li.style.display = 'block';
        } else {
            li.style.display = 'none';
        }
    }
};
