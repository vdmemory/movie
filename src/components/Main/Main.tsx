import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectSearchMovies, selectDetailsMovie } from "../../store/selectors";
import {
    getSearchMoviesRequest,
    getDetailsMovieRequest,
} from "../../store/actions";
import { SearchMovies } from "../../api/searchMovies";
import Movie from "../common/Movie/Movie";

import Spinner from "../common/Spinner/Spinner";

import styles from "./Main.module.scss";

const Main: React.FC = () => {
    const dispatch = useDispatch();

    const {
        searchMoviesData,
        searchMoviesLoading,
        searchMoviesError,
    } = useSelector(selectSearchMovies);

    const {
        detailsMovieData,
        detailsMovieLoading,
        detailsMovieError,
    } = useSelector(selectDetailsMovie);

    // console.log(detailsMovieData);

    useEffect(() => {
        dispatch(getDetailsMovieRequest("tt0093692"));
    }, [dispatch]);

    const renderMovies = ({ title, poster, imdbId }: SearchMovies) => {
        return <Movie key={`movie${imdbId}`} title={title} poster={poster} />;
    };

    if (searchMoviesLoading) {
        return <Spinner />;
    }

    if (
        searchMoviesData &&
        searchMoviesData.length === 0 &&
        !searchMoviesError
    ) {
        return <p className={styles.message}>No results ...</p>;
    }

    if (searchMoviesError) {
        return <p className={styles.message}>{searchMoviesError}</p>;
    }

    return (
        <main className={styles.main}>
            <div className={styles.movies}>
                {searchMoviesData.map(renderMovies)}
            </div>
        </main>
    );
};

export default Main;
