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
import App from "../src/app";

render(
    <App />, document.getElementById("content")
);

// render(
//     <Provider store={store}><Header /></Provider>, document.getElementById("header")
// );
// render(<Provider store={store}><Footer /></Provider>, document.getElementById("footer"));
// render(<Provider store={store}><CalculatorContainer /></Provider>, document.getElementById("content"));