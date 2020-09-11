import * as types from "../types";
import reducer from "../reducer";
import * as actions from "../actions";
import { Actions } from "../actions";


import { DetailsMovie } from "../../api/detailsMovie";
import { SearchMovies } from "../../api/searchMovies";

const initialResult = {
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
    selectedPage: 0 as number,
};

describe('Reducer', () => {

    test("should handle initial state", () => {
        expect(reducer(undefined, {} as Actions)).toEqual(initialResult);
    });

    describe("SearchMovies reducer", () => {

    });
    describe("DetailsMovie reducer", () => {});
});