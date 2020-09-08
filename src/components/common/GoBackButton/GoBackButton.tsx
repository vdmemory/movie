import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./GoBackButton.module.scss";

const GoBackButton: React.FC = ({ children }) => {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    };

    return (
        <div className={styles.goBack} onClick={goBack}>
            {children || `Back to list`}
        </div>
    );
};

export default GoBackButton;
