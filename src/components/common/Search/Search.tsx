import React from "react";
import { BsSearch } from "react-icons/bs";

import { useSearchChange } from "./hooks";
import styles from "./Search.module.scss";

type Props = {
    placeholder: string;
    title: string;
    type: string;
};

const Search: React.FC<Props> = ({ placeholder, title, type }) => {
    const { handleSearchChange } = useSearchChange();

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
