import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

import styles from "./GoBackButton.module.scss";

type Props = {
    name: string;
}

const GoBackButton: React.FC<Props> = ({name}) => {
    const history = useHistory();

    const handleGoBack = useCallback(() => {
        history.goBack();
    }, [history]);

    return (
        <div className={styles.goBack} onClick={handleGoBack}>
            <HiOutlineArrowLeft className={styles.iconButton} />
            {name}
        </div>
    );
};

export default GoBackButton;
