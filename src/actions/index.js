import React from "react";
import ReactDOM from "react-dom";
import App from "../components/app";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';


import { allReducers } from "reducer";

const store = createStore(allReducers)

ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
