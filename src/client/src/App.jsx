import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Link, BrowserRouter as Router ,Routes} from "react-router-dom";
import Elegant from "./MainCategories/Elegant/Elegant";
import Sport from "./MainCategories/Sport/Sport";
import Casual from "./MainCategories/Casual/Casual";
import FirstPage from "./HomePage/FirstPage";
import Register from "./HomePage/Register/Register";
import Login from "./HomePage/Login/Login";
import ProductPresentation from "./MainCategories/components/ProductPresentation";

function App(){
  return(
    <Router>
      <Routes>
          <Route path="/" element={<FirstPage/>}> </Route>
          <Route path="/Elegant" element={<Elegant/>}> </Route>
          <Route path="/Sport" element={<Sport/>}></Route>
          <Route path="/Casual" element={<Casual/>}></Route>
          <Route path="/Register" element={<Register/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          </Routes>
    </Router>
    // <GetProducts/>
    // <ProductPresentation/>
  )
}
export default App;