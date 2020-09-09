import React from "react";

import { SearchMovies } from "../../api/searchMovies";
import Header from "../common/Header/Header";
import Card from "../common/Card/Card";
import Spinner from "../common/Spinner/Spinner";
import { useCustomHistory } from "../../hooks";
import { useMovies } from "./hooks";
import styles from "./Movies.module.scss";

const dataHeader = {
    titleHeader: "Find Movies, TV shows and more ...",
    titleSearch: "Search",
    type: "text",
    placeholder: "search movie ...",
};

const Movies: React.FC = () => {
    const { handlePushHistory } = useCustomHistory();
    const {
        searchMoviesData,
        searchMoviesLoading,
        searchMoviesError,
    } = useMovies();

    const renderMovies = (searchMovies: SearchMovies) => {
        const { imdbId } = searchMovies;

        return (
            <Card
                key={`movie${imdbId}`}
                id={imdbId}
                onClick={() => handlePushHistory(`movie/${imdbId}`)}
                {...searchMovies}
            />
        );
    };

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
