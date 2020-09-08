import React from "react";
import { BsSearch } from "react-icons/bs";
import debounce from "debounce";

import styles from "./Search.module.scss";
import { useDispatch } from "react-redux";
import { getSearchMoviesRequest } from "../../../store/actions";

type Props = {
    placeholder: string;
    title: string;
    type: string
};

const Search: React.FC<Props> = ({ placeholder, title, type }) => {
    const dispatch = useDispatch();

    const onChangeDispatch = (value: string) => {
        dispatch(getSearchMoviesRequest(value));
    };

    const debounceChange = debounce(onChangeDispatch, 500);

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        debounceChange(e.target.value);
    };

    return (
        <div className={styles.bar}>
            <BsSearch className={styles.searchIcon} />
            <input
                className={styles.searchbar}
                placeholder={placeholder}
                type={type}
                title={title}
                onChange={onSearchChange}
            />
        </div>
    );
};

export default Search;
