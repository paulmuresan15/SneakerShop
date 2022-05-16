import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import authService from "../../Services/AuthService";
import userService from "../../Services/UserService";
import Navigation from "../HomePage/Navigation";
import {Link} from "react-router-dom";
import {Button, Container} from "@mui/material";
import FooterPage from "../HomePage/FooterPage";
import {set} from "react-hook-form";
import productService from "../../Services/ProductService";
import stockService from "../../Services/StockService";

function ControlPanelStockDelete(){
    const navigate = useNavigate();
    const [stocks,setStocks] = useState([]);

    useEffect(() => {
        if(!authService.getCurrentUser().roles.includes("ROLE_ADMIN")){
            navigate(-1);
        }
        stockService.getAllStockEntries().then(response => {
            setStocks(response);
            console.log(response);

        })


    },[])

    return (
        <div className="mainContainer">
            <div className="upContainer">
                <div className="navbar">
                    <Navigation />
                </div>
            </div>
            <div>
                <Container className="table-container">
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>Product</th>
                            <th>Size</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {stocks && stocks.map((stock, index) =>
                            <tr key={index}>
                                <td>{stock.productName}</td>
                                <td>{stock.size}</td>
                                <td>{stock.quantity}</td>
                                <td>{stock.price}</td>
                                <td>
                                    <Button variant="contained" onClick={() => {
                                       stockService.deleteStockOfProduct(stock.productId,stock.size).then(() => {
                                           stockService.getAllStockEntries().then(response => {
                                               setStocks(response);
                                           })
                                       })
                                    }}>Delete
                                    </Button>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </Container>
            </div>
            <FooterPage/>
        </div>
    );

}

export default ControlPanelStockDelete;