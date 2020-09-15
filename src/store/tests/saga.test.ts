import { call, put } from "redux-saga/effects";
import * as actions from "../actions";
import { DetailsMovie, getDetailsMovie } from "../../api/detailsMovie";
import { SearchMovies, getSearchMovies } from "../../api/searchMovies";
import { getSearchMoviesWorker, getDetailsMovieWorker } from "../saga";

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

describe("Sagas", () => {
    describe("getSearchMovies", () => {
        test("success triggers success action with searchMovies", () => {
            const generator = getSearchMoviesWorker(
                actions.getSearchMoviesRequest("string", 1)
            );
            const response = { searchMovies };

            expect(generator.next().value).toEqual(
                call(getSearchMovies, "string", 1)
            );

            expect(generator.next(response).value).toEqual(
                put(actions.getSearchMoviesSuccess({ searchMovies }))
            );

            expect(generator.next()).toEqual({ done: true, value: undefined });
        });

        test("failure triggers failure action", () => {
            const generator = getSearchMoviesWorker(
                actions.getSearchMoviesRequest("", 1)
            );
            const response = { Response: "False", Error: "error" };

            expect(generator.next().value).toEqual(
                call(getSearchMovies, "", 1)
            );

            expect(generator.next(response).value).toEqual(
                put(actions.getSearchMoviesFailure("error"))
            );

            expect(generator.next()).toEqual({ done: true, value: undefined });
        });
    });

    describe("getDetailsMovie", () => {
        test("success triggers success action with detailsMovie", () => {
            const generator = getDetailsMovieWorker(
                actions.getDetailsMovieRequest("id",)
            );
            const response = detailsMovie ;

            expect(generator.next().value).toEqual(call(getDetailsMovie, "id"));

            expect(generator.next(response).value).toEqual(
                put(actions.getDetailsMovieSuccess( detailsMovie ))
            );

            expect(generator.next()).toEqual({ done: true, value: undefined });
        });

        test("failure triggers failure action", () => {
            const generator = getDetailsMovieWorker(
                actions.getDetailsMovieRequest("id")
            );
            const response = { Response: "False", Error: "error" };

            expect(generator.next().value).toEqual(call(getDetailsMovie, "id"));

            expect(generator.next(response).value).toEqual(
                put(actions.getDetailsMovieFailure("error"))
            );

            expect(generator.next()).toEqual({ done: true, value: undefined });
        });
    });
});
