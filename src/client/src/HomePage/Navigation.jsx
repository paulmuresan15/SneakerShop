import React, {useContext, useEffect} from "react";
import {Navbar, Nav, Container, NavDropdown} from "react-bootstrap";
import "../styles/styles.css";
import {AiOutlineShoppingCart} from "react-icons/ai";
import FirstPage from "./FirstPage";
import Elegant from "../MainCategories/Elegant/Elegant";
import Sport from "../MainCategories/Sport/Sport";
import Casual from "../MainCategories/Casual/Casual";
import Login from "./User/Login";
import Register from "./User/Register";
import ControlPanel from "../ControlPanel/ControlPanel";
import {useState} from "react";
import RegisterIcon from "./components/RegisterIcon";
import {IconContext} from "react-icons";
import logo from "../Pictures/logo.png";
import {UserContext} from "./User/UserContext";
import AuthService from "../services/AuthService";

function Navigation() {
    const [username, setUsername] = useState("");

    useEffect(() => {
        if (AuthService.getCurrentUser()) {
            setUsername(AuthService.getCurrentUser().username);
        }
    }, []);

    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark" className="navbar">
            <Container >
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="logo">
                        <img src={logo} alt="Logo"></img>
                    </Nav>
                    <Nav className="me-auto">
                        <Nav.Link href="/Sport" element={<Sport/>}>Sport</Nav.Link>
                        <Nav.Link href="/Elegant" element={<Elegant/>}>Elegant</Nav.Link>
                        <Nav.Link href="/Casual" element={<Casual/>}>Casual</Nav.Link>
                    </Nav>
                    <Nav className="ml-2">
                        <Nav.Link href="/ShoppingCart">
                            <IconContext.Provider value={{className: "navbarIcon"}}>
                                <AiOutlineShoppingCart/>
                            </IconContext.Provider>
                        </Nav.Link>
                        <NavDropdown title={<RegisterIcon/>}>
                            <NavDropdown.Item href="/Register" element={<Register/>}>
                                <p className="navbarWriting">Register</p>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/Login" element={<Login/>}>
                                <p className="navbarWriting">Login</p>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;

