import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import App from "./components/app";
// import allReducers from "./reducers/index";

// const createStoreWithMiddleware = applyMiddleware()(createStore);

import "./style/main.scss";

function main() {
  ReactDOM.render(
    // <Provider store={createStoreWithMiddleware(allReducers)}>
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    // </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
