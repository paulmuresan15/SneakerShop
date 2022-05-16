import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter as Router} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "modern-normalize/modern-normalize.css";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import FirstPage from "./Components/HomePage/FirstPage";
import { Route, Routes } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
