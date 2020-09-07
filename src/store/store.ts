import { createStore, applyMiddleware, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import watcher from "./saga";
import reducer from "./reducer";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const store: Store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middlewares))
);
sagaMiddleware.run(watcher);

export default store;
