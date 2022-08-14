import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export default function TopNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink className="nav-link" to="/">
          React-Bootstrap
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/register">
              Register
            </NavLink>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
            <NavLink className="nav-link" to="/logout">
              Logout
            </NavLink>
            <NavLink className="nav-link" to="/reserve">
              Reserve
            </NavLink>

            <NavLink className="nav-link" to="/doctors">
              doctors
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
