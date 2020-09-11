import * as types from "../types";
import * as actions from "../actions";
import { DetailsMovie } from "../../api/detailsMovie";
import { SearchMovies } from "../../api/searchMovies";

const searchMovies: SearchMovies[] = [
    {
        title: "this title",
        year: "this year",
        imdbId: "this imdbId;",
        type: "this type",
        poster: "this poster",
    },
];

const detailsMovie: DetailsMovie = {
    title: "string",
    year: "this year",
    runtime: "string",
    genre: "string",
    director: "string",
    actors: "string",
    plot: "string",
    language: "string",
    country: "string",
    poster: "string",
    imdbRating: "string",
    imdbId: "string",
    type: "string",
    response: true,
    error: "string",
};

describe("Actions", () => {
    describe("SearchMovies actions", () => {
        test("Should create GET_SEARCH_MOVIES_REQUEST action", () => {
            expect(actions.getSearchMoviesRequest("value", 1)).toEqual({
                type: types.GET_SEARCH_MOVIES_REQUEST,
                payload: { value: "value", page: 1 },
            });
        });

        test("Should create GET_SEARCH_MOVIES_SUCCESS action", () => {
            expect(actions.getSearchMoviesSuccess({ value: "value" })).toEqual({
                type: types.GET_SEARCH_MOVIES_SUCCESS,
                payload: { value: "value" },
			});
			expect(actions.getSearchMoviesSuccess({ searchMovies })).toEqual({
                type: types.GET_SEARCH_MOVIES_SUCCESS,
                payload: { searchMovies },
            });
		});
		
		test("Should create GET_SEARCH_MOVIES_FAILURE action", () => {
            expect(actions.getSearchMoviesFailure("error")).toEqual({
                type: types.GET_SEARCH_MOVIES_FAILURE,
                payload: "error",
            });
        });
    });

    

    describe("DetailsMovie actions", () => {
        test("Should create GET_DETAILS_MOVIE_REQUEST action", () => {
            expect(actions.getDetailsMovieRequest("movieId")).toEqual({
                type: types.GET_DETAILS_MOVIE_REQUEST,
                payload: "movieId",
            });
        });

        test("Should create GET_DETAILS_MOVIE_SUCCESS action", () => {
            expect(actions.getDetailsMovieSuccess( detailsMovie )).toEqual({
                type: types.GET_DETAILS_MOVIE_SUCCESS,
                payload:  detailsMovie ,
            });
        });

        test("Should create GET_DETAILS_MOVIE_FAILURE action", () => {
            expect(actions.getDetailsMovieFailure("error")).toEqual({
                type: types.GET_DETAILS_MOVIE_FAILURE,
                payload: "error",
            });
        });
	});

	test("Should create RESET_SEARCH_MOVIES action", () => {
        expect(actions.resetSearchMovies()).toEqual({
            type: types.RESET_SEARCH_MOVIES
        });
	});
	
	test("Should create SET_SEARCH_VALUE action", () => {
        expect(actions.setSearchValue("value")).toEqual({
            type: types.SET_SEARCH_VALUE,
            payload: "value",
        });
	});
	
	test("Should create SET_SELECTED_PAGE action", () => {
        expect(actions.setSelectedPage(1)).toEqual({
            type: types.SET_SELECTED_PAGE,
            payload: 1,
        });
    });
});
