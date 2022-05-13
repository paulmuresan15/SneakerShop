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

        <Navbar  className="footer" expand="lg" fixed="bottom" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
          </Container>
        </Navbar>
     );

}
export default FooterPage;
