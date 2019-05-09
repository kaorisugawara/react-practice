import React from "react";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import { Provider } from "react-redux";
import rootReducer from "../proto/reducers";
import rootSaga from "../proto/sagaEffects";

import AlertDialog from "../proto/component/dialog/dialog";
import UserFetchContainer from "../proto/container/UserFetchContainer/UserFetchContainer";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const Home = () => (
    <div>
        <h2>Home</h2>
        <p>Welcome My App</p>
        <AlertDialog />
        <Provider store={store}><UserFetchContainer /></Provider>
    </div>
)

export default Home;