// import React from "react";
// import { render } from "react-dom";
// import { connect, Provider } from 'react-redux';
// import { createStore } from 'redux';

// const initialState = { message: "hello redux." }
// const store = createStore(
//   (state = initialState) =>({ ...state }), initialState
// );

// const App = (props) => (<div>{props.message}</div>)

// const ReduxApp = connect((state) => ({ message: state.message }))(App)

// render(<Provider store={store}><ReduxApp /></Provider>, document.getElementById("content"));

import React from "react";
import { render } from "react-dom";

import { createStore } from "redux";

import { Provider } from "react-redux";

import rootReducer from "../proto/reducers";

import Header from "../proto/component/header/header";
import Footer from "../proto/component/footer/footer";
import CalculatorContainer from "../proto/container/CalculatorContainer"

const store = createStore(rootReducer);

render(<Provider store={store}><Header /></Provider>, document.getElementById("header"));
render(<Provider store={store}><Footer /></Provider>, document.getElementById("footer"));
render(<Provider store={store}><CalculatorContainer /></Provider>, document.getElementById("content"));