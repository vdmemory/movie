import React from "react";

import noposter from "./noposter.png"
import styles from "./Card.module.scss";

type Props = {
    title: string;
    poster: string;
    year: string;
    id: string;
    onClick(id: string): void;
};

const Card: React.FC<Props> = ({ title, poster, onClick, id, year }) => {
    const handleClick = () => {
        onClick(id);
    };

    return (
        <div className={styles.movie}>
            <figure onClick={handleClick}>
                <img alt={title} src={poster !== "N/A" ? poster : noposter} />
                <h2>{`${title} (${year})`}</h2>
            </figure>
        </div>
    );
};

export default Card;
