import api from "./apiSetup";

// Types
type FetchedMovieDetails = {
    Title: string;
    Year: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Poster: string;
    imdbRating: string;
    imdbID: string;
    Type: string;
    Response: boolean;
    Error: string;
};

// Class for typing and snake_case to camelCase
export class DetailsMovie {
    title: string;
    year: string;
    runtime: string;
    genre: string;
    director: string;
    actors: string;
    plot: string;
    language: string;
    country: string;
    poster: string;
    imdbRating: string;
    imdbId: string;
    type: string;
    response: boolean;
    error: string;
    constructor(movie: FetchedMovieDetails) {
        this.title = movie.Title;
        this.year = movie.Year;
        this.runtime = movie.Runtime;
        this.genre = movie.Genre;
        this.director = movie.Director;
        this.actors = movie.Actors;
        this.plot = movie.Plot;
        this.language = movie.Language;
        this.country = movie.Country;
        this.poster = movie.Poster;
        this.imdbRating = movie.imdbRating;
        this.imdbId = movie.imdbID;
        this.type = movie.Type;
        this.response = movie.Response;
        this.error = movie.Error;
    }
}

// Requests
export const getDetailsMovie = (movieId: string) =>
    api
        .get(``, { params: { i: movieId } })
        .then(({ data }) => (data.Response === "True") ? new DetailsMovie(data) : Promise.reject(data))
        .catch((error) => error);