import React from "react";

import { Header } from "./components/Header";
import { Main } from "./components/Main";

import styles from "./App.module.scss";

const App: React.FC = () => {
    return (
        <div className={styles.app}>
            <Header />
            <Main />
        </div>
    );
};

export default App;
