import React, { useEffect } from "react";

import noposter from "./noposter.png"
import styles from "./Movie.module.scss";

type Props = {
    title: string;
    poster: string;
};

const Movie: React.FC<Props> = ({ title, poster }) => {
    return (
        <div className={styles.movie}>
            <figure>
                <img alt="poster" src={poster !== "N/A" ? poster : noposter} />
                <h2>{title}</h2>
            </figure>
        </div>
    );
};

export default Movie;
