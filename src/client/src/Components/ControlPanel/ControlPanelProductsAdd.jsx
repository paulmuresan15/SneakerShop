import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import authService from "../../Services/AuthService";
import userService from "../../Services/UserService";
import Navigation from "../HomePage/Navigation";
import {Container} from "@mui/material";
import FooterPage from "../HomePage/FooterPage";
import {Form} from "react-bootstrap";
import { useLocation } from 'react-router-dom'
import categoryService from "../../Services/CategoryService";
import brandService from "../../Services/BrandService";
import {set} from "react-hook-form";
import productService from "../../Services/ProductService";


function ControlPanelProductsAdd() {
    const navigate = useNavigate();
    const location = useLocation()
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const[name,setName] = useState("");
    const[category,setCategory] = useState("");
    const[brand,setBrand] = useState("");
    const[username,setUsername] = useState("");
    const[photo, setPhoto] = useState();
    useEffect(() => {
        if(!authService.getCurrentUser().roles.includes("ROLE_ADMIN")){
            navigate(-1);
        }
        categoryService.getAllCategories().then(response => setCategories(response));
        brandService.getAllBrands().then(response => setBrands(response));
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
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control onChange={(e) => setName(e.target.value)} placeholder="Product Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formCategory">
                            <Form.Label>Category</Form.Label>
                        <Form.Select onChange={(e) => setCategory(e.target.value)} aria-label="Category">
                            <option>Open this select menu</option>
                            {categories && categories.map(category =>
                            <option value={category.name}>{category.name}</option>)
                            }
                        </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBrand">
                            <Form.Label>Brand</Form.Label>
                        <Form.Select onChange={(e) => setBrand(e.target.value)} aria-label="Brand">
                            <option>Open this select menu</option>
                            {brands && brands.map(brand =>
                            <option value={brand.name}>{brand.name}</option>)
                            }
                        </Form.Select>
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Photo</Form.Label>
                            <Form.Control onChange={(e) => {
                                setPhoto(e.target.files.item(0));
                            }} type="file" />
                        </Form.Group>
                        <button  onClick={(e) => {
                            e.preventDefault();
                            console.log(photo);
                            productService.addNewProduct(name, category, brand, photo).then(()  => navigate(-1));
                        }}>
                            Submit
                        </button>
                    </Form>
                </Container>
            </div>
            <FooterPage/>
        </div>
    )
}
export default ControlPanelProductsAdd;