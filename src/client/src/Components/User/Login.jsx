import React, {useContext, useState} from 'react';
import Navigation from '../HomePage/Navigation';
import {UserContext} from "./UserContext";
import {IoMdLogIn} from "react-icons/io";
import authService from "../../Services/AuthService";
import { useNavigate } from 'react-router-dom';
import {Container} from "@mui/material";
import {Form} from "react-bootstrap";
import {Button} from "@mui/material";

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleEmailInput = event => {
        setEmail(event.target.value);
    };

    const handlePasswordInput = event => {
        setPassword(event.target.value);
    };


    // input => un textbox in care se introduc valori de catre utilizator in pagina
    return (
        <div className='mainContainer'>
            <div className='navbar'>
                <Navigation/>
            </div>
            <Container>
                <Form className="login-form">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={handleEmailInput} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={handlePasswordInput} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="contained"   onClick={(e) => {
                        e.preventDefault();
                        authService.login(email, password).then(() => {
                            navigate("/");
                        })}
                    }>
                        Submit
                    </Button>
                </Form>
            </Container>

        </div>
    );
}

export default Login;