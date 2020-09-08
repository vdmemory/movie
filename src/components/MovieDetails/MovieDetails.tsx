import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

import { getDetailsMovieRequest } from "../../store/actions";
import { selectDetailsMovie } from "../../store/selectors";
import GoBackButton from "../common/GoBackButton/GoBackButton";

import styles from "./MovieDetails.module.scss";

const MovieDetails: React.FC = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const {
        detailsMovieData,
        detailsMovieLoading,
        detailsMovieError,
    } = useSelector(selectDetailsMovie);

    // console.log(detailsMovieData);

    useEffect(() => {
        dispatch(getDetailsMovieRequest(id));
    }, [dispatch, id]);

    return (
        <>
            <GoBackButton>
                <HiOutlineArrowLeft className={styles.iconButton}/> Back To List
            </GoBackButton>
            <section className={styles.details}>Details Page - {id}</section>
        </>
    );
};

export default MovieDetails;
