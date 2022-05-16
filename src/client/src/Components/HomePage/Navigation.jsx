import React, { useContext, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "../../Styles/styles.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import FirstPage from "./FirstPage";
import Elegant from "../MainCategories/Elegant/Elegant";
import Sport from "../MainCategories/Sport/Sport";
import Casual from "../MainCategories/Casual/Casual";
import Login from "../User/Login";
import Register from "../User/Register";
import ControlPanel from "../ControlPanel/ControlPanel";
import { useState } from "react";
import RegisterIcon from "./components/RegisterIcon";
import { IconContext } from "react-icons";
import logo from "../../Pictures/logo.png";
import { UserContext } from "../User/UserContext";
import AuthService from "../../Services/AuthService";
import cartService from "../../Services/CartService";
import productService from "../../Services/ProductService";

function Navigation() {
    const [user,setUser] = useState();
    const [controlPanelHref, setControlPanelHref] = useState("");
    const [controlPanelText, setControlPanelText] = useState("");
    const [loginLogoutText, setLoginLogoutText] = useState("");
    const [loginLogoutHref, setLoginLogoutHref] = useState("");
    const [cartSize,setCartSize] = useState();


    useEffect(() => {
        if (AuthService.getCurrentUser()) {
            setUser(AuthService.getCurrentUser());
            setLoginLogoutText("Logout");
            setLoginLogoutHref("/Logout");
        } else {
            setLoginLogoutText("Login");
            setLoginLogoutHref("/Login");
        }
        if(user) {
            cartService.getCartSize(user.id).then(response => {
                setCartSize(response);
            })
        }
    }, []);

    useEffect(() => {
        if(user) {
            if(user.roles.includes("ROLE_ADMIN")) {
                setControlPanelHref("/ControlPanel");
                setControlPanelText("Control Panel");
            }
            cartService.getCartSize(user.id).then(response => {
                setCartSize(response);
            })
        }
    },[user]);

    return (
        <Navbar  fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark" className="navbar">
            <Container >
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="logo">
                        <Nav.Link href="/">
                            <img className="logo" src={logo} alt="Logo"></img>
                        </Nav.Link>
                    </Nav>
                    <Nav className="me-auto">
                        <Nav.Link href="/Sport" element={<Sport />}>Sport</Nav.Link>
                        <Nav.Link href="/Elegant" element={<Elegant />}>Elegant</Nav.Link>
                        <Nav.Link href="/Casual" element={<Casual />}>Casual</Nav.Link>
                        <Nav.Link href={controlPanelHref} element={<Casual />}>{controlPanelText}</Nav.Link>
                    </Nav>
                    <Nav className="ml-2">
                        <p className="cart-text">{cartSize}</p>
                        <Nav.Link href="/ShoppingCart">
                            <IconContext.Provider value={{ className: "navbarIcon" }}>
                                <AiOutlineShoppingCart />
                            </IconContext.Provider>
                        </Nav.Link>
                        <NavDropdown title={<RegisterIcon />}>
                            <NavDropdown.Item href="/Register" element={<Register />}>
                                <p className="navbarWriting">Register</p>
                            </NavDropdown.Item>
                            <NavDropdown.Item href={loginLogoutHref}>
                                <p className="navbarWriting">{loginLogoutText}</p>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Navigation;

