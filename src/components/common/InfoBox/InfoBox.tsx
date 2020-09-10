import React from "react";
import StarRatingComponent from "react-star-rating-component";
import { BsStar } from "react-icons/bs";

import RowInfo from "../RowInfo/RowInfo";
import Poster from "../Poster/Poster";

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
    imdbRating,
}) => {
    const infoData: { title: string; subtitle: string }[] = [
        { title: "Original title", subtitle: title },
        { title: "Genre", subtitle: genre },
        { title: "Country", subtitle: country },
        { title: "Year", subtitle: year },
        { title: "Duration", subtitle: runtime },
        { title: "Director", subtitle: director },
        { title: "Сast of actors", subtitle: actors },
        { title: "Language", subtitle: language },
    ];

    const renderRowInfo = (
        {
            title,
            subtitle,
        }: {
            title: string;
            subtitle: string;
        },
        idx: number
    ) => {
        return (
            <RowInfo key={`info-${idx}`} title={title} subtitle={subtitle} />
        );
    };

    return (
        <div className={styles.infoBox}>
            <h2 className={styles.title}>{`${title} (${year})`}</h2>
            <div className={styles.solid}></div>
            <div className={styles.content}>
                <div className={styles.leftBar}>
                    <Poster title={title} poster={poster} />
                </div>
                <div className={styles.rightBar}>
                    {infoData.map(renderRowInfo)}
                    <h3 className={styles.titleScore}>Total score:</h3>
                    <StarRatingComponent
                        name="imdbRating"
                        value={Number(imdbRating)}
                        starCount={10}
                        renderStarIcon={() => (
                            <span className={styles.star}>
                                <BsStar />
                            </span>
                        )}
                    />
                </div>
            </div>

            {plot !== "N/A" ? (
                <>
                    <div className={styles.solid}></div>
                    <p className={styles.description}>{plot}</p>
                </>
            ) : null}
        </div>
    );
};

export default InfoBox;
