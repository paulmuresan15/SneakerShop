import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Input from "./Input";
import Register from "./HomePage/Register";
import { Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Man from "./Components/Man";
import Women from "./Components/Women";
import Kids from "./Components/Kids";
import ContactUs from "./Components/ContactUs";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Navigation from "./HomePage/Navigation";
import Box from "@material-ui/core/Box";
// import Slideshow from "./HomePage/Slideshow";
import FirstPage from "./HomePage/FirstPage";

function App() {
  return (
    <div className="App">
      <FirstPage />
      <Routes>
        <Route path="/Man" element={<Man />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/Kids" element={<Kids />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
export default App;
