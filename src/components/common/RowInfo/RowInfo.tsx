import React from "react";

import styles from "./RowInfo.module.scss";

type Props = {
    title: string;
    subtitle: string;
};

const RowInfo: React.FC<Props> = ({ title, subtitle }) => {
    return (
        <div className={styles.rowInfo}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.subtitle}>{subtitle}</p>
        </div>
    );
};

export default RowInfo;
