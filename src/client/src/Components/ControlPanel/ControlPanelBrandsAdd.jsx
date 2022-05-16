import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import authService from "../../Services/AuthService";
import userService from "../../Services/UserService";
import Navigation from "../HomePage/Navigation";
import {Container} from "@mui/material";
import FooterPage from "../HomePage/FooterPage";
import {Form} from "react-bootstrap";
import { useLocation } from 'react-router-dom'
import {set} from "react-hook-form";
import brandService from "../../Services/BrandService";


function ControlPanelBrandsAdd() {
    const navigate = useNavigate();
    const location = useLocation()
    const [name,setName] = useState("");
    useEffect(() => {
        if(!authService.getCurrentUser().roles.includes("ROLE_ADMIN")){
            navigate(-1);
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
                <Container>
                    <Form className="login-form">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Brand Name</Form.Label>
                            <Form.Control onChange={(e) => setName(e.target.value)} placeholder="name" />
                        </Form.Group>
                        <button  onClick={(e) => {
                            e.preventDefault();
                            brandService.addNewBrand(name).then(()  => navigate(-1));
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
export default ControlPanelBrandsAdd;