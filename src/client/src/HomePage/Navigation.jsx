import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "../styles/styles.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import FirstPage from "./FirstPage";
import Elegant from "../MainCategories/Elegant/Elegant";
import Sport from "../MainCategories/Sport/Sport";
import Casual from "../MainCategories/Casual/Casual";
import Login from "./Login/Login";
import Register from "./Register/Register";
import DisplayNumberOfItems from "../ShoppingCart/controls/DisplayNumberOfItems";
import { useState } from "react";
import RegisterIcon from "./components/RegisterIcon";
import { IconContext } from "react-icons";
import logo from "../Pictures/logo.png";

function Navigation() {
  const [counter, setCounter] = useState(0);
  function incrementCounter() {
    setCounter(counter + 1);
  }

  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      expand="xl"
      bg="navbarColor"
      variant="dark"
    >
      <Container fluid>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar">
            <Nav className="logo">
              <img src={logo} alt="Logo"></img>
            </Nav>
            <Nav>
              <Nav.Link href="/" element={<FirstPage />}>
                {" "}
                <p className="navbarWriting"> Home </p>
              </Nav.Link>
              <Nav.Link href="/Sport" element={<Sport />}>
                {" "}
                <p className="navbarWriting"> Sport </p>{" "}
              </Nav.Link>
              <Nav.Link href="/Elegant" element={<Elegant />}>
                {" "}
                <p className="navbarWriting"> Elegant </p>
              </Nav.Link>
              <Nav.Link href="/Casual" element={<Casual />}>
                {" "}
                <p className="navbarWriting"> Casual </p>{" "}
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link exact href="/ShoppingCart">
                <IconContext.Provider value={{ className: "navbarIcon" }}>
                  {" "}
                  <AiOutlineShoppingCart />{" "}
                </IconContext.Provider>
              </Nav.Link>
              <DisplayNumberOfItems message={counter} />
              {/* <ShowButton data={incrementCounter} /> */}
              <NavDropdown align="end" title={<RegisterIcon />}>
                <NavDropdown.Item exact href="/Register" element={<Register />}>
                  <p className="navbarWriting">Register</p>
                </NavDropdown.Item>
                <NavDropdown.Item exact href="/Login" element={<Login />}>
                  <p className="navbarWriting">Login</p>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

//if I want my navbar to have another color, I use Navbar and in the bg option, I write a name, which will be implemented
// in the css class with the name "bg-name"

//NavDropDown for more options in the Navbar
