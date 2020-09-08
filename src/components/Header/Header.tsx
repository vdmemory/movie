import React from "react";

import Search from "../common/Search/Search";

import styles from "./Header.module.scss";

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Find Movies, TV shows and more ...</h1>
            <Search placeholder="search movie ..." title="Search" type="text" />
        </header>
    );
};

export default Header;
