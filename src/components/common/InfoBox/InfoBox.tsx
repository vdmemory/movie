import React from "react";

import RowInfo from "../RowInfo/RowInfo";

import styles from "./InfoBox.module.scss";

type Props = {
    title: string;
    year: string;
    runtime: string;
    genre: string;
    director: string;
    actors: string;
    plot: string;
    language: string;
    country: string;
    poster: string;
    imdbRating: string;
};

type RowInfo = {
    title: string;
    subtitle: string;
};

const InfoBox: React.FC<Props> = ({
    title,
    year,
    poster,
    genre,
    country,
    runtime,
    director,
    actors,
    language,
    plot,
}) => {
    const infoData = [
        { title: "Original title", subtitle: title },
        { title: "Genre", subtitle: genre },
        { title: "Country", subtitle: country },
        { title: "Year", subtitle: year },
        { title: "Duration", subtitle: runtime },
        { title: "Director", subtitle: director },
        { title: "Сast of actors", subtitle: actors },
        { title: "Language", subtitle: language },
    ];

    // const renderRowInfo = ({title, subtitle}) => {
    //     return <RowInfo title={title} subtitle={subtitle} />;
    // };

    return (
        <div className={styles.infoBox}>
            <h2 className={styles.title}>{`${title} (${year})`}</h2>
            <div className={styles.solid}></div>
            <div className={styles.content}>
                <div className={styles.leftBar}>
                    <img src={poster} alt={title} />
                </div>
                <div className={styles.rightBar}>
                    {/* {infoData.map(renderRowInfo)} */}
                    right bar
                </div>
            </div>
            <div className={styles.solid}></div>
            <p className={styles.description}>{plot}</p>
        </div>
    );
};

export default InfoBox;
