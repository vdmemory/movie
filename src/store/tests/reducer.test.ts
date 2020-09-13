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

describe("Reducer", () => {
  test("should handle initial state", () => {
    expect(reducer(undefined, {} as Actions)).toEqual(initialResult);
  });

  describe("SearchMovies reducer", () => {
    test("Should handle GET_SEARCH_MOVIES", () => {
      expect(
        reducer(undefined, {
          type: types.GET_SEARCH_MOVIES_REQUEST,
          payload: { value: "value", page: 1 },
        } as Actions)
      ).toEqual({
        ...initialResult,
        loading: {
          ...initialResult.loading,
          searchMovies: true,
        },
      });

      expect(
        reducer(undefined, {
          type: types.GET_SEARCH_MOVIES_SUCCESS,
          payload: { value: "value" },
        } as Actions)
      ).toEqual({
        ...initialResult,
        loading: {
          ...initialResult.loading,
          searchMovies: false,
        },
        searchMovies: {
          value: "value",
        },
      });

      expect(
        reducer(undefined, {
          type: types.GET_SEARCH_MOVIES_SUCCESS,
          payload: { searchMovies },
        } as Actions)
      ).toEqual({
        ...initialResult,
        loading: {
          ...initialResult.loading,
          searchMovies: false,
        },
        searchMovies: { searchMovies },
      });

      expect(
        reducer(undefined, {
          type: types.GET_SEARCH_MOVIES_FAILURE,
          payload: "error message",
        } as Actions)
      ).toEqual({
        ...initialResult,
        loading: {
          ...initialResult.loading,
          searchMovies: false,
        },
        error: {
          ...initialResult.error,
          searchMovies: "error message",
        },
      });
    });
  });
  describe("DetailsMovie reducer", () => {
    test("Should handle GET_DETAILS_MOVIE_REQUEST", () => {
      expect(
        reducer(undefined, {
          type: types.GET_DETAILS_MOVIE_REQUEST,
          payload: "movieId",
        } as Actions)
      ).toEqual({
        ...initialResult,
        loading: {
          ...initialResult.loading,
          detailsMovie: true,
        },
        error: {
          ...initialResult.error,
          detailsMovie: null,
        },
      });

      expect(
        reducer(undefined, {
          type: types.GET_DETAILS_MOVIE_SUCCESS,
          payload: detailsMovie,
        } as Actions)
      ).toEqual({
        ...initialResult,
        loading: {
          ...initialResult.loading,
          detailsMovie: false,
        },
        detailsMovie,
      });

      expect(
        reducer(undefined, {
          type: types.GET_DETAILS_MOVIE_FAILURE,
          payload: "error message",
        } as Actions)
      ).toEqual({
        ...initialResult,
        loading: {
          ...initialResult.loading,
          detailsMovie: false,
        },
        error: {
          ...initialResult.error,
          detailsMovie: "error message",
        },
      });
    });
  });

  test("Should handle RESET_SEARCH_MOVIES", () => {
    expect(
      reducer(undefined, {
        type: types.RESET_SEARCH_MOVIES,
      } as Actions)
    ).toEqual({
      ...initialResult,
      searchMovies: {} as Record<string, string | SearchMovies[]>,
      error: {
        ...initialResult.error,
        searchMovies: null,
      },
    });
  });

  test("Should handle SET_SEARCH_VALUE", () => {
    expect(
      reducer(undefined, {
        type: types.SET_SEARCH_VALUE,
        payload: "search value",
      } as Actions)
    ).toEqual({
      ...initialResult,
      searchValue: "search value",
    });
  });

  test("Should handle SET_SELECTED_PAGE", () => {
    expect(
      reducer(undefined, {
        type: types.SET_SELECTED_PAGE,
        payload: 1,
      } as Actions)
    ).toEqual({
      ...initialResult,
      selectedPage: 1,
    });
  });
});
