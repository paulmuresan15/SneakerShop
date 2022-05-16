import React, {useContext, useState} from "react";
import Navigation from "../HomePage/Navigation";
import {UserContext} from "./UserContext";
import {Form} from "react-bootstrap";
import authService from "../../Services/AuthService";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import FooterPage from "../HomePage/FooterPage";

function Register() {
  const navigate=useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const { user, setUser } = useContext(UserContext);

  // function to update state of name with
  // value enter by user in form

  return (
    <div className="mainContainer">
      <div className="navbar">
        <Navigation />
      </div>
      <Form className="register-form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control onChange={(e) => setFirstName(e.target.value)}  placeholder="Enter first name" />
      </Form.Group> <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control onChange={(e) => setLastName(e.target.value)}  placeholder="Enter last name" />
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control onChange={(e) => setUsername(e.target.value)}  placeholder="Enter username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e) => setConfPassword(e.target.value)} type="password" placeholder="Password" />
      </Form.Group>
        <Button variant="contained"   onClick={(e) => {
          e.preventDefault();
          if(password === confPassword){
            authService.register(email,userName,password,firstName,lastName).then(() => {
              navigate("/");
            })} else {
            alert("Passwords do not match");
          }
          }}>
          Submit
        </Button>
      </Form>
    <FooterPage/>
    </div>
  );
}

export default Register;
