import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import authService from "../services/AuthService";
import userService from "../services/UserService";
import Navigation from "../HomePage/Navigation";
import {Container} from "@mui/material";
import FooterPage from "../HomePage/FooterPage";
import {Form} from "react-bootstrap";
import { useLocation } from 'react-router-dom'
import brandService from "../services/BrandService";


function ControlPaneBrandsEditBrand() {
    const navigate = useNavigate();
    const location = useLocation()
    const [id,setId] = useState(location.state.id);
    const[name,setName] = useState(location.state.name);
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
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Brand name</Form.Label>
                            <Form.Control onChange={(e) => setName(e.target.value)} defaultValue={name} />
                        </Form.Group>
                        <button  onClick={(e) => {
                            e.preventDefault();
                            brandService.editBrand(id,name).then(()  => navigate(-1));
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
export default ControlPaneBrandsEditBrand;