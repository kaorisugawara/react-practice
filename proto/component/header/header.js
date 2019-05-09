import React from "react";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import { Link } from "react-router-dom";
import { Provider } from "react-redux";
import rootReducer from "../../reducers";
import rootSaga from "../../sagaEffects";
import ShareContainer from "../../container/ShareContainer/ShareContainer";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const Header = () => {
    return (
    <div id="header">
        <header className="header">
            <nav className="global-nav">
                <ul>
                    <li className="nav-item"><Link to="/">HOME</Link></li>
                    <li className="nav-item"><Link to="/about">ABOUT</Link></li>
                    <li className="nav-item"><Link to="/other">OTHER</Link></li>
                    <li className="nav-item"><Provider store={store}><ShareContainer /></Provider></li>
                </ul>
            </nav>
            <div className="clear"></div>
        </header>
    </div>
    )
};

export default Header;