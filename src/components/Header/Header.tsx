import React, { useEffect } from 'react'

import styles from "./Header.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchMovies, selectDetailsMovie } from '../../store/selectors';
import { getSearchMoviesRequest, getDetailsMovieRequest } from '../../store/actions';

const Header: React.FC = () => {
    const dispatch = useDispatch();

    const {searchMoviesData, searchMoviesLoading, searchMoviesError} = useSelector(selectSearchMovies);

    const {detailsMovieData} = useSelector(selectDetailsMovie)

    console.log(searchMoviesData);

    useEffect(() => {
        dispatch(getSearchMoviesRequest('hgvfghvfytfytvytyt'))
        dispatch(getDetailsMovieRequest("tt0093692"));
    }, [dispatch])

    return <div className={styles.header}>Header</div>;
};

export default Header;
