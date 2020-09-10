import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import styles from "./GoBackButton.module.scss";

const GoBackButton: React.FC = ({ children }) => {
    const history = useHistory();

    const handleGoBack = useCallback(() => {
        history.goBack();
    }, [history]);

    return (
        <div className={styles.goBack} onClick={handleGoBack}>
            {children || `Back to list`}
        </div>
    );
};

export default GoBackButton;
