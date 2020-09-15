import React, { Dispatch } from "react";
import Search from "../Search/Search";

import styles from "./Header.module.scss";

type Props = {
    placeholder: string;
    titleHeader: string;
    titleSearch: string;
    type: string;
    dispatch: Dispatch<any>;
};

const Header: React.FC<Props> = ({
    titleHeader,
    titleSearch,
    type,
    placeholder,
    dispatch,
}) => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>{titleHeader}</h1>
            <Search
                placeholder={placeholder}
                title={titleSearch}
                type={type}
                dispatch={dispatch}
            />
        </header>
    );
};

export default Header;
