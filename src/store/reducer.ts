import { Reducer } from "redux";
import * as type from "./types";
import { DetailsMovie } from "../api/detailsMovie";
import { SearchMovies } from "../api/searchMovies";
import { Actions } from "./actions";

const initialState = {
    searchMovies: {} as Record<string, string | SearchMovies[]>,
    detailsMovie: {} as DetailsMovie,
    loading: {
        searchMovies: false as boolean,
        detailsMovie: false as boolean,
    },
    error: {
        searchMovies: null as string | null,
        detailsMovie: null as string | null,
    },
    searchValue: "" as string,
    selectedPage: 0 as number
};

export type State = typeof initialState;

const reducer: Reducer<State, Actions> = (state = initialState, action) => {
    switch (action.type) {
        case type.GET_SEARCH_MOVIES_REQUEST:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    searchMovies: true,
                },
                error: {
                    ...state.error,
                    searchMovies: null,
                },
            };
        case type.GET_SEARCH_MOVIES_SUCCESS:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    searchMovies: false,
                },
                searchMovies: action.payload,
            };
        case type.GET_SEARCH_MOVIES_FAILURE:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    searchMovies: false,
                },
                error: {
                    ...state.error,
                    searchMovies: action.payload,
                },
            };
        case type.GET_DETAILS_MOVIE_REQUEST:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    detailsMovie: true,
                },
                error: {
                    ...state.error,
                    detailsMovie: null,
                },
            };
        case type.GET_DETAILS_MOVIE_SUCCESS:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    detailsMovie: false,
                },
                detailsMovie: action.payload,
            };
        case type.GET_DETAILS_MOVIE_FAILURE:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    detailsMovie: false,
                },
                error: {
                    ...state.error,
                    detailsMovie: action.payload,
                },
            };
        case type.RESET_SEARCH_MOVIES:
            return {
                ...state,
                searchMovies: {} as Record<string, string | SearchMovies[]>,
                error: {
                    ...state.error,
                    searchMovies: null,
                },
            };
        case type.SET_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.payload,
            };
        case type.SET_SELECTED_PAGE:
            return {
                ...state,
                selectedPage: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
