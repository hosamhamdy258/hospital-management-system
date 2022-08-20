import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import logo from "../assets/img/logo.jpg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { Link, Navigate } from "react-router-dom";
import { checkAuthenticated, load_user, logout } from "../store/usersSlice";

const MyNav = () => {
  const { isAuthenticated } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [activeLink, setActiveLink] = useState("home");
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

  const logoutButton = () => {
    dispatch(logout());
  }

  // console.log(isAuthenticated);
  // useEffect(() => {
  //   if (isAuthenticated) {
  //     dispatch(load_user());
  //   }
  // }, []);

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""} id="MyNAv">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              href="/"
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={
                activeLink === "doctors" ? "active navbar-link" : "navbar-link"
              }
              href="/doctors"
              onClick={() => onUpdateActiveLink("doctors")}
            >
              Doctors
            </Nav.Link>

            <Nav.Link
              className={
                activeLink === "departments" ? "active navbar-link" : "navbar-link"
              }
              href="/departments"
              onClick={() => onUpdateActiveLink("departments")}
            >
              Departments
            </Nav.Link>
            <Nav.Link
              className={
                activeLink === "about" ? "active navbar-link" : "navbar-link"
              }
              href="/about"
              onClick={() => onUpdateActiveLink("about")}
            >
              About US
            </Nav.Link>
            <Nav.Link
              className={
                activeLink === "contact" ? "active navbar-link" : "navbar-link"
              }
              href="/contact"
              onClick={() => onUpdateActiveLink("contact")}
            >
              Contact Us
            </Nav.Link>
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
            {!isAuthenticated &&
              <div>
                <button className="vvd btn btn-info">
                  <Link className='' to='/login' role='button'>Login</Link>
                </button>
                <button className="vvd btn btn-info">
                  <Link className='' to='/signup' role='button'>Signup</Link>
                </button>
              </div>}



            {isAuthenticated && <button className="vvd btn btn-info" onClick={logoutButton}>
              <Link className='' to='/' role='button'>Logout</Link>
            </button>}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
