import React from "react";
import { createStore } from "redux";
import { Link } from "react-router-dom";
import { Provider } from "react-redux";
import rootReducer from "../../reducers";
import ShareContainer from "../../container/ShareContainer/ShareContainer";

const store = createStore(rootReducer);

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