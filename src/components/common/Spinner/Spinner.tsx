import React from "react";

import styles from "./Spinner.module.scss";

const Spinner: React.FC = () => (
    <div className={styles.wrapSpinner}>
        <div className={styles.spinner}></div>
    </div>
); 
export default Spinner;
