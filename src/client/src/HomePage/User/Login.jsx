import React, {useContext, useState} from 'react';
import Navigation from '../Navigation';
import {UserContext} from "../../HomePage/User/UserContext";
import "./loginStyle.css"
import {IoMdLogIn} from "react-icons/io";
import authService from "../../services/AuthService";
import { useNavigate } from 'react-router-dom';
import {Container} from "@mui/material";
import {Form} from "react-bootstrap";
import {Button} from "react-native";

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
                    <button  onClick={(e) => {
                        e.preventDefault();
                        authService.login(email, password).then(() => {
                            navigate("/");
                        })}
                    }>
                        Submit
                    </button>
                </Form>
            </Container>

        </div>
    );
}

export default Login;