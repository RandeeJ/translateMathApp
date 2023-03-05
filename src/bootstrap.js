import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import App from "./components/app";
import 'regenerator-runtime/runtime';



import "./style/main.scss";

function main() {
  ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
