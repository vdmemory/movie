import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "./actions";
import * as types from "./types";
import { getDetailsMovie } from "../api/detailsMovie";
import { getSearchMovies } from "../api/searchMovies";

function* getDetailsMovieWorker({
    payload,
}: ReturnType<typeof actions.getDetailsMovieRequest>) {
    try {
        const data = yield call(getDetailsMovie, payload);
        if (data.Response === "False") {
            yield put(actions.getDetailsMovieFailure(data.Error));
        } else {
            yield put(actions.getDetailsMovieSuccess(data));
        }
    } catch (e) {
        yield put(actions.getDetailsMovieFailure(e));
    }
}

function* getSearchMoviesWorker({
    payload,
}: ReturnType<typeof actions.getSearchMoviesRequest>) {
    try {
        const data = yield call(getSearchMovies, payload);
        if (data.Response === "False") {
            yield put(actions.getSearchMoviesFailure(data.Error));
        } else {
            yield put(actions.getSearchMoviesSuccess(data));
        }
    } catch (e) {
        yield put(actions.getSearchMoviesFailure(e));
    }
}

export default function* watcher() {
    yield takeLatest(types.GET_DETAILS_MOVIE_REQUEST, getDetailsMovieWorker);
    yield takeLatest(types.GET_SEARCH_MOVIES_REQUEST, getSearchMoviesWorker);
}
