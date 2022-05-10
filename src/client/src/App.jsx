import React ,{useState,useMemo}from "react";
import ReactDOM from "react-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Link, BrowserRouter as Router ,Routes} from "react-router-dom";
import Elegant from "./MainCategories/Elegant/Elegant";
import Sport from "./MainCategories/Sport/Sport";
import Casual from "./MainCategories/Casual/Casual";
import FirstPage from "./HomePage/FirstPage";
import Register from "./HomePage/User/Register";
import Login from "./HomePage/User/Login";
import ProductPresentation from "./MainCategories/components/ProductPresentation";
import { UserContext } from "./HomePage/User/UserContext";

function App(){
  const [user,setUser]=useState(null);


  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  //de fiecare data cand se modifica user-ul se retrimite referinta value
  return(
    //includem toate paginile in UserContext.Provider pentru a avea acces la ce user e conectat din orice route al proiectului
    <Router>
      <UserContext.Provider value={value}>
      <Routes>
          <Route path="/" element={<FirstPage/>}> </Route>
          <Route path="/Elegant" element={<Elegant/>}> </Route>
          <Route path="/Sport" element={<Sport/>}></Route>
          <Route path="/Casual" element={<Casual/>}></Route>
          <Route path="/Register" element={<Register/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          </Routes>
      </UserContext.Provider>
    </Router>
    // <GetProducts/>
    // <ProductPresentation/>
  )
}
export default App;