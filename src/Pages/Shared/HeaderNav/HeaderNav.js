import React from "react";
import "./HeaderNav.css";
import logo from "../../../img/logo.png";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import initializingAuthentication from "../../../firebase/firebase.init";
import useAuth from "../../../hooks/useAuth";
import userPhoto from "../../../img/user1.png";

initializingAuthentication();
const HeaderNav = () => {
  const { user, logout, isAdmin } = useAuth();
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="dark"
        fixed="top"
        className="text-center nav-background"
      >
        <Container className="py-1">
          <Navbar.Brand as={Link} to="/home">
            <img
              style={{
                maxHeight: "50px",
                width: "100%",
              }}
              src={logo}
              alt="logo"
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto header-nav ms-lg-3">
              <Nav.Link
                className="nav-item"
                as={NavLink}
                activeStyle={{ color: "#fff" }}
                to="/home"
              >
                Home
              </Nav.Link>

              <Nav.Link
                className="nav-item"
                as={NavLink}
                activeStyle={{ color: "#fff" }}
                to="/properties"
              >
                Properties
              </Nav.Link>

              {user.email && (
                <Nav.Link
                  className="nav-item"
                  as={NavLink}
                  activeStyle={{ color: "#fff" }}
                  to="/dashboard"
                >
                  Dashboard
                </Nav.Link>
              )}
              {isAdmin && (
                <Nav.Link disabled style={{ color: "red" }}>
                  ADMIN
                </Nav.Link>
              )}
            </Nav>

            {!user.email ? (
              <div></div>
            ) : (
              [
                user.photoURL ? (
                  <Nav.Link>
                    <img
                      style={{
                        height: "44px",
                        width: "44px",
                        borderRadius: "50%",
                      }}
                      src={user.photoURL}
                      alt="user"
                    />
                  </Nav.Link>
                ) : (
                  <Nav.Link>
                    <img
                      style={{
                        height: "44px",
                        width: "44px",
                        borderRadius: "50%",
                      }}
                      src={userPhoto}
                      alt="user"
                    />
                  </Nav.Link>
                ),
              ]
            )}

            <Nav>
              {user.displayName && <Nav.Link>{user.displayName}</Nav.Link>}

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
      <div style={{ marginBottom: "80px" }}></div>
    </div>
  );
};

export default HeaderNav;
