import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import authService from "../services/AuthService";
import userService from "../services/UserService";
import Navigation from "../HomePage/Navigation";
import {Link} from "react-router-dom";
import {Container} from "@mui/material";
import FooterPage from "../HomePage/FooterPage";
import {set} from "react-hook-form";
import productService from "../services/ProductService";

function ControlPanelProductsEdit(){
    const navigate = useNavigate();
    const [products,setProducts] = useState([]);

    useEffect(() => {
        if(!authService.getCurrentUser().roles.includes("ROLE_ADMIN")){
            navigate(-1);
        }
        productService.getAllProducts().then(response => {
            setProducts(response);
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
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Brand</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {products && products.map((product, index) =>
                            <tr key={index}>
                                <td><img src={product.photoUrl} alt ={product.name}/></td>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>{product.brand}</td>
                                <td>

                                    <Link
                                        to="/ControlPanelProductsEditProduct"
                                        state={{
                                            productId: product.id,
                                            name : product.name,
                                            category : product.category,
                                            brand : product.brand,
                                        }}
                                    >Edit</Link>
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

export default ControlPanelProductsEdit;