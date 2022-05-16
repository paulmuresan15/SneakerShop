import React, {useMemo, useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Elegant from "./Components/MainCategories/Elegant/Elegant";
import Sport from "./Components/MainCategories/Sport/Sport";
import Casual from "./Components/MainCategories/Casual/Casual";
import FirstPage from "./Components/HomePage/FirstPage";
import Register from "./Components/User/Register";
import Login from "./Components/User/Login";
import {UserContext} from "./Components/User/UserContext";
import Logout from "./Components/User/Logout";
import ProductDetails from "./Components/ControlPanel/ProductDetails";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import ControlPanel from "./Components/ControlPanel/ControlPanel";
import ControlPanelUsers from "./Components/ControlPanel/ControlPanelUsers";
import ControlPanelUsersDelete from "./Components/ControlPanel/ControlPanelUsersDelete";
import ControlPanelUsersEdit from "./Components/ControlPanel/ControlPanelUsersEdit";
import ControlPanelUsersEditUser from "./Components/ControlPanel/ControlPanelUsersEditUser";
import ControlPanelBrands from "./Components/ControlPanel/ControlPanelBrands";
import ControlPanelBrandsAdd from "./Components/ControlPanel/ControlPanelBrandsAdd";
import ControlPanelBrandsEdit from "./Components/ControlPanel/ControlPanelBrandsEdit";
import ControlPanelBrandsEditBrand from "./Components/ControlPanel/ControlPanelBrandsEditBrand";
import ControlPanelBrandsDelete from "./Components/ControlPanel/ControlPanelBrandsDelete";
import ControlPanelProducts from "./Components/ControlPanel/ControlPanelProducts";
import ControlPanelProductsAdd from "./Components/ControlPanel/ControlPanelStockAdd";
import ControlPanelProductsEdit from "./Components/ControlPanel/ControlPanelProductsEdit";
import ControlPanelProductsEditProduct from "./Components/ControlPanel/ControlPanelProductsEditProduct";
import ControlPanelProductsDelete from "./Components/ControlPanel/ControlPanelProductsDelete";
import ControlPanelStock from "./Components/ControlPanel/ControlPanelStock";
import ControlPanelStockAdd from "./Components/ControlPanel/ControlPanelStockAdd";
import ControlPanelStockEdit from "./Components/ControlPanel/ControlPanelStockEdit";
import ControlPanelStockEditStock from "./Components/ControlPanel/ControlPanelStockEditStock";
import ControlPanelStockDelete from "./Components/ControlPanel/ControlPanelStockDelete";




function App(){
  const [user,setUser]=useState(UserContext);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

    return (
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
                    <Route path="/ProductDetails" element={<ProductDetails/>}></Route>
                    <Route path="/ShoppingCart" element={<ShoppingCart/>}></Route>
                    <Route path="/ControlPanel" element={<ControlPanel/>}></Route>
                    <Route path="/ControlPanelUsers" element={<ControlPanelUsers/>}></Route>
                    <Route path="/ControlPanelUsersDelete" element={<ControlPanelUsersDelete/>}></Route>
                    <Route path="/ControlPanelUsersEdit" element={<ControlPanelUsersEdit/>}></Route>
                    <Route path="/ControlPanelUsersEditUser" element={<ControlPanelUsersEditUser/>}></Route>
                    <Route path="/ControlPanelBrands" element={<ControlPanelBrands/>}></Route>
                    <Route path="/ControlPanelBrandsAdd" element={<ControlPanelBrandsAdd/>}></Route>
                    <Route path="/ControlPanelBrandsEdit" element={<ControlPanelBrandsEdit/>}></Route>
                    <Route path="/ControlPanelBrandsEditBrand" element={<ControlPanelBrandsEditBrand/>}></Route>
                    <Route path="/ControlPanelBrandsDelete" element={<ControlPanelBrandsDelete/>}></Route>
                    <Route path="/ControlPanelProducts" element={<ControlPanelProducts/>}></Route>
                    <Route path="/ControlPanelProductsAdd" element={<ControlPanelProductsAdd/>}></Route>
                    <Route path="/ControlPanelProductsEdit" element={<ControlPanelProductsEdit/>}></Route>
                    <Route path="/ControlPanelProductsEditProduct" element={<ControlPanelProductsEditProduct/>}></Route>
                    <Route path="/ControlPanelProductsDelete" element={<ControlPanelProductsDelete/>}></Route>
                    <Route path="/ControlPanelStock" element={<ControlPanelStock/>}></Route>
                    <Route path="/ControlPanelStockAdd" element={<ControlPanelStockAdd/>}></Route>
                    <Route path="/ControlPanelStockEdit" element={<ControlPanelStockEdit/>}></Route>
                    <Route path="/ControlPanelStockEditStock" element={<ControlPanelStockEditStock/>}></Route>
                    <Route path="/ControlPanelStockDelete" element={<ControlPanelStockDelete/>}></Route>
                </Routes>
            </UserContext.Provider>
        </Router>

    );
}
export default App;