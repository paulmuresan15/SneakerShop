import React, {useMemo, useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Elegant from "./MainCategories/Elegant/Elegant";
import Sport from "./MainCategories/Sport/Sport";
import Casual from "./MainCategories/Casual/Casual";
import FirstPage from "./HomePage/FirstPage";
import Register from "./HomePage/User/Register";
import Login from "./HomePage/User/Login";
import ControlPanel from "./ControlPanel/ControlPanel";
import {UserContext} from "./HomePage/User/UserContext";
import Logout from "./HomePage/User/Logout";
import ControlPanelUsers from "./ControlPanel/ControlPanelUsers";
import ControlPanelBrands from "./ControlPanel/ControlPanelBrands";
import ControlPanelProducts from "./ControlPanel/ControlPanelProducts";
import ControlPanelStock from "./ControlPanel/ControlPanelStock";
import ControlPanelUsersDelete from "./ControlPanel/ControlPanelUsersDelete";
import ControlPanelUsersEditUser from "./ControlPanel/ControlPanelUsersEditUser";
import ControlPanelUsersEdit from "./ControlPanel/ControlPanelUsersEdit";



function App(){
  const [user,setUser]=useState(UserContext);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return(
    <Router>
      <UserContext.Provider value={value}>
      <Routes>
          <Route path="/" element={<FirstPage/>}> </Route>
          <Route path="/Elegant" element={<Elegant/>}> </Route>
          <Route path="/Sport" element={<Sport/>}></Route>
          <Route path="/Casual" element={<Casual/>}></Route>
          <Route path="/Register" element={<Register/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Logout" element={<Logout/>}></Route>
          <Route path="/ControlPanel" element={<ControlPanel/>}></Route>
          <Route path="/ControlPanelUsers" element={<ControlPanelUsers/>}></Route>
          <Route path="/ControlPanelUsersDelete" element={<ControlPanelUsersDelete/>}></Route>
          <Route path="/ControlPanelUsersEdit" element={<ControlPanelUsersEdit/>}></Route>
          <Route path="/ControlPanelUsersEditUser" element={<ControlPanelUsersEditUser/>}></Route>
          <Route path="/ControlPanelBrands" element={<ControlPanelBrands/>}></Route>
          <Route path="/ControlPanelProducts" element={<ControlPanelProducts/>}></Route>
          <Route path="/ControlPanelStock" element={<ControlPanelStock/>}></Route>
          </Routes>
      </UserContext.Provider>
    </Router>

  )
}
export default App;