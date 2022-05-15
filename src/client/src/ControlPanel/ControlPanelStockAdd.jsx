import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import authService from "../services/AuthService";
import userService from "../services/UserService";
import Navigation from "../HomePage/Navigation";
import {Button, Container} from "@mui/material";
import FooterPage from "../HomePage/FooterPage";
import {Form} from "react-bootstrap";
import { useLocation } from 'react-router-dom'
import categoryService from "../services/CategoryService";
import brandService from "../services/BrandService";
import {set} from "react-hook-form";
import productService from "../services/ProductService";
import stockService from "../services/StockService";


function ControlPanelProductsAdd() {
    const navigate = useNavigate();
    const location = useLocation()
    const [products, setProducts] = useState([]);
    const[product,setProduct] = useState();
    const[size,setSize] = useState("");
    const[price,setPrice] = useState(0);
    const[quantity,setQuantity] = useState(0);
    const[featured,setFeatured] = useState(false);
    useEffect(() => {
        if(!authService.getCurrentUser().roles.includes("ROLE_ADMIN")){
            navigate(-1);
        }
        productService.getAllProducts().then(response =>{
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
                <Container>
                    <Form className="login-form">
                        <Form.Group className="mb-3" controlId="formBrand">
                            <Form.Label>Product</Form.Label>
                            <Form.Select onChange={(e) => setProduct(e.target.value)} aria-label="Product">
                                {products && products.map(product =>
                                    <option value={product.id}>{product.name}</option>)
                                }
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Size</Form.Label>
                            <Form.Control onChange={(e) => setSize(e.target.value)} placeholder="Size" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Price</Form.Label>
                            <Form.Control onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
                        </Form.Group>
                        <Form.Label>Featured</Form.Label>
                        <Form.Select onChange={(e) => setFeatured(e.target.value)} aria-label="Featured">
                                <option value={false}>false</option>
                                <option value={true}>true</option>)
                        </Form.Select>
                        <Button variant="contained"  onClick={(e) => {
                            e.preventDefault();
                            stockService.addStockToProduct(product,size,price,quantity,featured) .then(()  => navigate(-1));
                        }}>
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
            <FooterPage/>
        </div>
    )
}
export default ControlPanelProductsAdd;