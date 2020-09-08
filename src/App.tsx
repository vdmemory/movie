import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Movies } from "./components/Movies";
import { MovieDetails } from "./components/MovieDetails";

import styles from "./App.module.scss";

const App: React.FC = () => {
    return (
        <div className={styles.app}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Movies} />
                    <Route path="/movie/:id" component={MovieDetails} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
