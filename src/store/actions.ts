import * as types from "./types";
import { DetailsMovie } from "../api/detailsMovie";
import { SearchMovies } from "../api/searchMovies";

export const getSearchMoviesRequest = (value: string) => ({
    type: types.GET_SEARCH_MOVIES_REQUEST,
    payload: value
});

export const getSearchMoviesSuccess = (payload: SearchMovies[]) => ({
    type: types.GET_SEARCH_MOVIES_SUCCESS,
    payload,
});

export const getSearchMoviesFailure = (error: string) => ({
    type: types.GET_SEARCH_MOVIES_FAILURE,
    payload: error,
});

export const getDetailsMovieRequest = (movieId: string) => ({
    type: types.GET_DETAILS_MOVIE_REQUEST,
    payload: movieId
});

export const getDetailsMovieSuccess = (payload: DetailsMovie) => ({
    type: types.GET_DETAILS_MOVIE_SUCCESS,
    payload,
});

export const getDetailsMovieFailure = (error: string) => ({
    type: types.GET_DETAILS_MOVIE_FAILURE,
    payload: error,
});

export type Actions =
    | ReturnType<typeof getSearchMoviesRequest>
    | ReturnType<typeof getSearchMoviesSuccess>
    | ReturnType<typeof getSearchMoviesFailure>
    | ReturnType<typeof getDetailsMovieRequest>
    | ReturnType<typeof getDetailsMovieSuccess>
    | ReturnType<typeof getDetailsMovieFailure>;