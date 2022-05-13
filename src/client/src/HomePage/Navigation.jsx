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

    // return (
    //   <Navbar
    //     collapseOnSelect
    //     fixed="top"
    //     expand="xl"
    //     bg="navbarColor"
    //     variant="dark"
    //   >
    //     <div className="clasapulii">
    //       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //       <Navbar.Collapse id="responsive-navbar-nav">
    //         <Nav className="navbar">
    //           <Nav className="logo">
    //             <img src={logo} alt="Logo"></img>
    //           </Nav>
    //           <Nav>
    //             <div className="align-center">
    //             <Nav.Link href="/" element={<FirstPage />}>
    //               {" "}
    //               <p className="navbarWriting"> Home </p>
    //             </Nav.Link>
    //             <Nav.Link href="/Sport" element={<Sport />}>
    //               {" "}
    //               <p className="navbarWriting"> Sport </p>{" "}
    //             </Nav.Link>
    //             <Nav.Link href="/Elegant" element={<Elegant />}>
    //               {" "}
    //               <p className="navbarWriting"> Elegant </p>
    //             </Nav.Link>
    //             <Nav.Link href="/Casual" element={<Casual />}>
    //               {" "}
    //               <p className="navbarWriting"> Casual </p>{" "}
    //             </Nav.Link>
    //             <Nav.Link href="/ControlPanel" element={<ControlPanel/>}>
    //               {" "}
    //               <p className="navbarWriting" >Control Panel</p>{" "}
    //             </Nav.Link>
    //             </div>
    //             <Nav className="align-end">
    //               {username}
    //               <Nav.Link href="/ShoppingCart">
    //                 <IconContext.Provider value={{ className: "navbarIcon" }}>
    //                   {" "}
    //                   <AiOutlineShoppingCart />{" "}
    //                 </IconContext.Provider>
    //               </Nav.Link>
    //               <NavDropdown  title={<RegisterIcon />}>
    //                 <NavDropdown.Item href="/Register" element={<Register />}>
    //                   <p className="navbarWriting">Register</p>
    //                 </NavDropdown.Item>
    //                 <NavDropdown.Item href="/Login" element={<Login />}>
    //                   <p className="navbarWriting">Login</p>
    //                 </NavDropdown.Item>
    //               </NavDropdown>
    //             </Nav>
    //           </Nav>
    //         </Nav>
    //       </Navbar.Collapse>
    //     </div>
    //   </Navbar>
    // );
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

//if I want my navbar to have another color, I use Navbar and in the bg option, I write a name, which will be implemented
// in the css class with the name "bg-name"

//NavDropDown for more options in the Navbar
