import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import logo from "../assets/img/logo.jpg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const MyNav = () => {
  const [activeLink, setActiveLink] = useState("");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""} id="MyNAv">
      <Container>
        <NavLink className='logo nav-link' to="/home">
          <img src={logo} alt="logo" />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              className={
                activeLink === "home" ? "active navbar-link nav-link" : "navbar-link nav-link"
              }
              to="/"
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </NavLink>
            <NavLink
              className={
                activeLink === "doctors" ? "active navbar-link nav-link" : "navbar-link nav-link"
              }
              to="/doctors"
              onClick={() => onUpdateActiveLink("doctors")}
            >
              Doctors
            </NavLink>

            <NavLink
              className={
                activeLink === "departments" ? "active navbar-link nav-link" : "navbar-link nav-link"
              }
              to="/departments"
              onClick={() => onUpdateActiveLink("departments")}
            >
              Departments
            </NavLink>
            <NavLink
              className={
                activeLink === "about" ? "active navbar-link nav-link" : "navbar-link nav-link"
              }
              to="/about"
              onClick={() => onUpdateActiveLink("about")}
            >
              About US
            </NavLink>
            <NavLink
              className={
                activeLink === "contact" ? "active navbar-link nav-link" : "navbar-link nav-link"
              }
              to="/contact"
              onClick={() => onUpdateActiveLink("contact")}
            >
              Contact Us
            </NavLink>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <img src={navIcon1} alt="" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="" />
              </a>
            </div>
              {/* <span>Login</span> */}
              <NavLink className='nav_login_button' to='/login' role='button'>Login</NavLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
