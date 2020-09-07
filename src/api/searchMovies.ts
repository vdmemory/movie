import api from "./apiSetup";

// Types
type FetchedSearchMovies = {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
    Response: boolean;
    Error: string;
};

// Class for typing and snake_case to camelCase
export class SearchMovies {
    title: string;
    year: string;
    imdbId: string;
    type: string;
    poster: string;
    response: boolean;
    error: string;
    constructor(movie: FetchedSearchMovies) {
        this.title = movie.Title;
        this.year = movie.Year;
        this.imdbId = movie.imdbID;
        this.type = movie.Type;
        this.poster = movie.Poster;
        this.response = movie.Response;
        this.error = movie.Error;
    }
}

// Requests
export const getSearchMovies = (value: string) =>
    api
        .get(``, { params: { s: value } })
        .then(({ data }) => data.Search ? mapMoviesArray(data.Search) : Promise.reject(data))
        .catch((error) => error);

// Mappers
const mapMoviesArray = (moviesArray: FetchedSearchMovies[]) =>
    moviesArray.map((movie) => new SearchMovies(movie));
