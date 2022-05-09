import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import AboutUs from "../Components/RoutePages/AboutUs";
import ContactUs from "../Components/RoutePages/ContactUs";

function FooterPage() {
  return (
    // <MDBFooter className="footerStyle" >
    //   <MDBContainer fluid>
    //     <MDBRow>
    //       <h1>Aici sunt</h1>
    //       <MDBCol md="6">
    //       </MDBCol>
    //       <MDBCol md="6">
    //       </MDBCol>
    //     </MDBRow>
    //   </MDBContainer>
    // </MDBFooter>
    <Navbar
      collapseOnSelect
      fixed="bottom"
      expand="xl"
      bg="navbarColor"
      variant="dark"
    >
      <Container fluid>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="footer">
            <Nav.Link exact href="/AboutUs" element={<AboutUs />}>
              <p className="navbarWriting">About Us</p>
            </Nav.Link>
          </Nav>
          <Nav className="footer">
            <Nav.Link exact href="/ContactUs" element={<ContactUs />}>
              <p className="navbarWriting">Contact Us</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default FooterPage;
