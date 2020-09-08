import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { selectSearchMovies } from "../../store/selectors";
import { SearchMovies } from "../../api/searchMovies";
import Header from "../common/Header/Header";
import Movie from "../common/Movie/Movie";
import Spinner from "../common/Spinner/Spinner";

import styles from "./Movies.module.scss";

const dataHeader = {
    titleHeader: "Find Movies, TV shows and more ...",
    titleSearch: "Search",
    type: "text",
    placeholder: "search movie ...",
};

const Movies: React.FC = () => {
    const history = useHistory();

    const {
        searchMoviesData,
        searchMoviesLoading,
        searchMoviesError,
    } = useSelector(selectSearchMovies);

    const handleMovieClick = useCallback(
        (id: string) => {
            history.push(`movie/${id}`);
        },
        [history]
    );

    const renderMovies = (searchMovies: SearchMovies) => (
        <Movie
            key={`movie${searchMovies.imdbId}`}
            id={searchMovies.imdbId}
            onClick={handleMovieClick}
            {...searchMovies}
        />
    );

    const renderMain = () => {
        if (searchMoviesLoading) return <Spinner />;

        if (
            searchMoviesData &&
            searchMoviesData.length === 0 &&
            !searchMoviesError
        )
            return <p className={styles.message}>No results ...</p>;

        if (searchMoviesError)
            return <p className={styles.message}>{searchMoviesError}</p>;

        return (
            <main className={styles.main}>
                <div className={styles.movies}>
                    {searchMoviesData.map(renderMovies)}
                </div>
            </main>
        );
    };

    return (
        <>
            <Header {...dataHeader} />
            {renderMain()}
        </>
    );
};

export default Movies;
