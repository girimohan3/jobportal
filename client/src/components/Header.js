import React from "react";
import {Button, Container, Form, Nav, Navbar, NavDropdown,Offcanvas } from 'react-bootstrap';


const Header = () => {
    return(
        <div>
            
        <Navbar fixed="top" bg="dark" expand="md" className="text-light mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
                <img src="https://marketbird.in/wp-content/uploads/2021/11/Market-Bird-logo.svg" width="150px"/>
                </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand`}
              aria-labelledby={`offcanvasNavbarLabel-expand`}
              placement="end"
              className="bg-dark"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link className="text-light" href="#action1">Home</Nav.Link>
                  <Nav.Link className="text-light" href="#action2">Dashboard</Nav.Link>
                  <NavDropdown className="bg-dark text-light"
                    title="Menu" >
                    <NavDropdown.Item href="#action3">Jobs</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Find Jobs
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Profile
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-light">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

        </div>
    )
}

export default Header;


