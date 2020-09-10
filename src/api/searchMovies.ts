import api from "./apiSetup";

type FetchedSearch = {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
};

export class SearchMovies {
    title: string;
    year: string;
    imdbId: string;
    type: string;
    poster: string;
    constructor(movie: FetchedSearch) {
        this.title = movie.Title;
        this.year = movie.Year;
        this.imdbId = movie.imdbID;
        this.type = movie.Type;
        this.poster = movie.Poster;
    }
}

// Requests
export const getSearchMovies = (value: string, page: number) =>
    api
        .get(``, { params: { s: value, page } })
        .then(({ data }) => {
            if (data.Search) {
                return {
                    totalResults: data.totalResults,
                    search: mapMoviesArray(data.Search),
                };
            }
            return Promise.reject(data);
        })
        .catch((error) => error);

// Mappers
const mapMoviesArray = (moviesArray: FetchedSearch[]) =>
    moviesArray.map((movie) => new SearchMovies(movie));

