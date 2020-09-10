import React, { useCallback } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { debounce } from "debounce";

import {
    resetSearchMovies,
    getSearchMoviesRequest,
    setSearchValue,
} from "../../../store/actions";
import styles from "./Search.module.scss";

type Props = {
    placeholder: string;
    title: string;
    type: string;
};

const Search: React.FC<Props> = ({
    placeholder,
    title,
    type,
}) => {
    const dispatch = useDispatch();

    const onChangeDispatch = useCallback(
        (value: string, page: number) => {
            if (!value) return dispatch(resetSearchMovies());
            dispatch(getSearchMoviesRequest(value, page));
            dispatch(setSearchValue(value));
        },
        [dispatch]
    );

    const debounceChange = debounce(onChangeDispatch, 500);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        debounceChange(e.target.value, 1);
    };

    return (
        <div className={styles.bar}>
            <BsSearch className={styles.searchIcon} />
            <input
                className={styles.searchbar}
                placeholder={placeholder}
                type={type}
                title={title}
                onChange={handleSearchChange}
            />
        </div>
    );
};

export default Search;
