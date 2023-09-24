import React from 'react';
import { Container, Nav, Navbar, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './logo.png';

function NavBar({ count }) {
  return (
    // Create a Bootstrap Navbar with various options.
    <Navbar bg="light" variant="light" expand="lg" sticky="top">
      <Container fluid>
        {/* Create a Navbar Brand with a link to the home page */}
        <Navbar.Brand as={Link} to="/">
          <img src={logo} height={30} alt="logo" />
        </Navbar.Brand>
        {/* Create a Navbar Toggle button for mobile view */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {/* Create a navigation menu */}
          <Nav className="m-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            {/* Create a link to the Home page */}
            <Nav.Link as={Link} active to="/">
              <strong>Home</strong>
            </Nav.Link>
          </Nav>
          {/* Create a link to the CartList page with a cart icon and badge */}
          <Nav.Link as={Link} to="/CartList">
            <Button
              as={Link}
              to="/CartList"
              className="m-auto"
              variant="outline-dark"
            >
              <i className="bi bi-cart4" style={{ fontSize: "25px" }}></i>
              {/* Display the cart item count received from the 'count' prop */}
              <Badge bg="dark">{count}</Badge>
            </Button>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
