import React, { useEffect } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectDetailsMovie } from "../../store/selectors";
import { getDetailsMovieRequest } from "../../store/actions";
import GoBackButton from "../common/GoBackButton/GoBackButton";
import InfoBox from "../common/InfoBox/InfoBox";
import Spinner from "../common/Spinner/Spinner";
import styles from "./MovieDetails.module.scss";

const MovieDetails: React.FC = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const {
        detailsMovieData,
        detailsMovieLoading,
        detailsMovieError,
    } = useSelector(selectDetailsMovie);

    useEffect(() => {
        dispatch(getDetailsMovieRequest(id));
    }, [dispatch, id]);

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
