import React from "react";
import useAuth from "../../hooks/useAuth";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const DashboardNav = () => {
  const { user, logout, isAdmin } = useAuth();
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Container fluid>
          <Navbar.Brand>Dashboard</Navbar.Brand>
          <Navbar>Menu</Navbar>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              {user.displayName && (
                <Nav.Link>
                  {user.displayName}
                  {isAdmin && <small> (Admin)</small>}
                </Nav.Link>
              )}

              {user.email ? (
                <Nav.Link onClick={logout}>Logout</Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/login">
                  <Button variant="danger">Login</Button>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default DashboardNav;
