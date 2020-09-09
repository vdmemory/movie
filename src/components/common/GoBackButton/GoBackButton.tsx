import React from "react";

import styles from "./GoBackButton.module.scss";
import { useCustomHistory } from "../../../hooks";

const GoBackButton: React.FC = ({ children }) => {
    const { handleGoBack } = useCustomHistory();

    return (
        <div className={styles.goBack} onClick={handleGoBack}>
            {children || `Back to list`}
        </div>
    );
};

export default GoBackButton;

