import { Selector } from "react-redux";
import { createSelector } from "reselect";
import { State } from "./reducer";
import { SearchMovies } from "../api/searchMovies";
import { DetailsMovie } from "../api/detailsMovie";

const selectSearchMoviesError: Selector<State, null | string> = (
    state
) => state.error.searchMovies;

const selectSearchMoviesLoading: Selector<State, boolean> = (
    state
) => state.loading.searchMovies;

const selectSearchMoviesData: Selector<
    State,
    Record<string, string | SearchMovies[]>
> = (state) => state.searchMovies;

const selectSearchValue: Selector<State, string> = (state) => state.searchValue;

export const selectSearchMovies: Selector<
    State,
    {
        searchMoviesLoading: boolean;
        searchMoviesError: null | string;
        searchMoviesData: Record<string, string | SearchMovies[]>;
        searchValue: string;
    }
> = createSelector(
    [
        selectSearchMoviesLoading,
        selectSearchMoviesError,
        selectSearchMoviesData,
        selectSearchValue,
    ],
    (searchMoviesLoading, searchMoviesError, searchMoviesData, searchValue) => {
        return {
            searchMoviesLoading,
            searchMoviesError,
            searchMoviesData,
            searchValue,
        };
    }
);

const selectDetailsMovieError: Selector<State, null | string> = (
    state
) => state.error.detailsMovie;

const selectDetailsMovieLoading: Selector<State, boolean> = (
    state
) => state.loading.detailsMovie;

const selectDetailsMovieData: Selector<State, DetailsMovie> = (
    state
) => state.detailsMovie;

export const selectDetailsMovie: Selector<
    State,
    {
        detailsMovieLoading: boolean;
        detailsMovieError: null | string;
        detailsMovieData: DetailsMovie;
    }
> = createSelector(
    [
        selectDetailsMovieLoading,
        selectDetailsMovieError,
        selectDetailsMovieData,
    ],
    (detailsMovieLoading, detailsMovieError, detailsMovieData) => {
        return {
            detailsMovieLoading,
            detailsMovieError,
            detailsMovieData,
        };
    }
);
