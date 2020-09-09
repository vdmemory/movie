import React from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";

import GoBackButton from "../common/GoBackButton/GoBackButton";
import InfoBox from "../common/InfoBox/InfoBox";
import Spinner from "../common/Spinner/Spinner";
import { useMovieDetails } from "./hooks";
import styles from "./MovieDetails.module.scss";

const MovieDetails: React.FC = () => {
    const {
        detailsMovieLoading,
        detailsMovieData,
        detailsMovieError,
    } = useMovieDetails();

    const renderInfoBox = () => {
        if (detailsMovieLoading) return <Spinner />;
        if (detailsMovieError)
            return <p className={styles.message}>{detailsMovieError}</p>;

        return (
            <section className={styles.details}>
                <InfoBox {...detailsMovieData} />
            </section>
        );
    };

    return (
        <>
            <GoBackButton>
                <HiOutlineArrowLeft className={styles.iconButton} /> Back To
                List
            </GoBackButton>
            {renderInfoBox()}
        </>
    );
};

export default MovieDetails;
