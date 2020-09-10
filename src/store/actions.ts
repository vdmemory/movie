import * as types from "./types";
import { DetailsMovie } from "../api/detailsMovie";
import { SearchMovies } from "../api/searchMovies";

export const getSearchMoviesRequest = (value: string, page: number) => ({
    type: types.GET_SEARCH_MOVIES_REQUEST,
    payload: { value, page },
});

export const getSearchMoviesSuccess = (payload: Record<string, string | SearchMovies[]>) => ({
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

export const resetSearchMovies = () => ({
    type: types.RESET_SEARCH_MOVIES
});

export const setSearchValue = (value: string) => ({
    type: types.SET_SEARCH_VALUE,
    payload: value,
});

export const setSelectedPage = (select: number) => ({
    type: types.SET_SELECTED_PAGE,
    payload: select,
});

export type Actions =
    | ReturnType<typeof getSearchMoviesRequest>
    | ReturnType<typeof getSearchMoviesSuccess>
    | ReturnType<typeof getSearchMoviesFailure>
    | ReturnType<typeof getDetailsMovieRequest>
    | ReturnType<typeof getDetailsMovieSuccess>
    | ReturnType<typeof getDetailsMovieFailure>
    | ReturnType<typeof resetSearchMovies>
    | ReturnType<typeof setSearchValue>
    | ReturnType<typeof setSelectedPage>;
