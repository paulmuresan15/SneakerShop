import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import authService from "../../Services/AuthService";
import userService from "../../Services/UserService";
import Navigation from "../HomePage/Navigation";
import {Container} from "@mui/material";
import FooterPage from "../HomePage/FooterPage";
import {Form} from "react-bootstrap";
import { useLocation } from 'react-router-dom'


function ControlPanelUsersEditUser() {
    const navigate = useNavigate();
    const location = useLocation()
    const [id,setId] = useState(location.state.id);
    const[firstName,setFirstName] = useState(location.state.firstName);
    const[lastName,setLastName] = useState(location.state.lastName);
    const[email,setEmail] = useState(location.state.email);
    const[username,setUsername] = useState(location.state.username);
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
                            <Form.Label>First Name</Form.Label>
                            <Form.Control onChange={(e) => setFirstName(e.target.value)} defaultValue={firstName} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control onChange={(e) => setLastName(e.target.value)} defaultValue={lastName} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control onChange={(e) => setEmail(e.target.value)} defaultValue={email} />
                        </Form.Group>
                        <button  onClick={(e) => {
                            e.preventDefault();
                            userService.editUser(id, firstName, lastName, email).then(r  => navigate(-1));
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
export default ControlPanelUsersEditUser;