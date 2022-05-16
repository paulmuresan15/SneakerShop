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
import cartService from "../../Services/CartService";

function ShoppingCart(){
    const navigate = useNavigate();
    const user = authService.getCurrentUser();
    const [products,setProducts] = useState([]);

    useEffect(() => {
        if(user){
        if(!authService.getCurrentUser().roles.includes("ROLE_ADMIN")){
            navigate(-1);
        }
          cartService.getCartProducts(user.id).then((response) => {
              setProducts(response);
          })
      }


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
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Size</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {products && products.map((product, index) =>
                            <tr key={index}>
                                <td><img src={product.photoUrl} alt ={product.name}/></td>
                                <td>{product.name}</td>
                                <td>{product.quantity}</td>
                                <td>{product.size}</td>
                                <td>
                                    <Button variant="contained" className="add-to-cart-button"  onClick={(e) => {
                                        e.preventDefault();
                                        cartService.removeFromCart(product.id).then(() => {
                                            cartService.getCartProducts(user.id).then((response) => {
                                                setProducts(response);
                                            })
                                        });
                                    }
                                      }>
                                        Remove
                                    </Button>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                    <Button variant="contained" className="add-to-cart-button"  onClick={(e) => {
                        e.preventDefault();
                        cartService.orderProducts(user.id)
                        cartService.getCartProducts(user.id).then(response => {
                            setProducts(response);
                        })
                    }
                    }>Order products</Button>
                </Container>
            </div>
            <FooterPage/>
        </div>
    );

}

export default ShoppingCart;