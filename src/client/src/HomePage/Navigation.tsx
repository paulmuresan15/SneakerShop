import React from "react";
import { Navbar, Nav, Container, NavbarBrand } from "react-bootstrap";
import logo from "./Components/sneaker.jpg";
import { StyleSheet, Text, View } from "react-native";

const Navigation = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        // fixed="top"
        expand="sm"
        // bg="dark"
        // variant="dark"
        className="bg-light justify-content-between"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="/"> Home </Nav.Link>
              <Nav.Link href="/Man"> Men </Nav.Link>
              <Nav.Link href="/Women"> Women </Nav.Link>
              <Nav.Link href="/Kids"> Kids </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  // container: {
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "stretch",
  //   justifyContent: "center",
  //   flexWrap: "nowrap",
  // },
  // navbarStyle: {
  //   flex: 2,
  //   alignItems: "center",
  // },
  // imageStyle: {
  //   flex: 1,
  // },

  // secondContainer: {
  //   flexDirection: "column",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});
