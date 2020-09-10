import React from "react";

import noposter from "./noposter.png";

type Props = {
    title: string;
    poster: string;
};

const Card: React.FC<Props> = ({ title, poster }) => {
    return <img alt={title} src={poster !== "N/A" ? poster : noposter} />;
};

export default Card;
