import React, { useCallback } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "debounce";

import {
  resetSearchMovies,
  getSearchMoviesRequest,
  setSearchValue,
  setSelectedPage,
} from "../../../store/actions";
import styles from "./Search.module.scss";
import { selectSearchMovies } from "../../../store/selectors";

type Props = {
  placeholder: string;
  title: string;
  type: string;
};

const Search: React.FC<Props> = ({ placeholder, title, type }) => {
  const dispatch = useDispatch();

  const { searchValue } = useSelector(selectSearchMovies);

  const onChangeDispatch = useCallback(
    (value: string, page: number) => {
      if (!value) return dispatch(resetSearchMovies());
      dispatch(getSearchMoviesRequest(value, page));
      dispatch(setSelectedPage(0));
    },
    [dispatch]
  );

  const debounceChange = debounce(onChangeDispatch, 500);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debounceChange(e.target.value, 1);
    dispatch(setSearchValue(e.target.value));
  };

  return (
    <div className={styles.bar}>
      <BsSearch className={styles.searchIcon} />
      <input
        className={styles.searchbar}
        placeholder={placeholder}
        type={type}
        title={title}
        value={searchValue}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Search;
