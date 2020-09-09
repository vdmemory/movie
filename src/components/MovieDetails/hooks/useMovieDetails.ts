import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectDetailsMovie } from "../../../store/selectors";
import { getDetailsMovieRequest } from "../../../store/actions";

export const useMovieDetails = () => {
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

    return {
        detailsMovieData, 
        detailsMovieLoading, 
        detailsMovieError 
    };
};
