import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import logo from "../assets/img/logo.jpg";
import { logout } from "../store/usersSlice";

const MyNav = () => {
  const [activeLink, setActiveLink] = useState("home");
  const { isAuthenticated, user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
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
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""} id="MyNAv">
      <Container>
        <NavLink className="logo nav-link" to="/home">
          <img src={logo} alt="logo" />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              className={
                activeLink === "home"
                  ? "active navbar-link nav-link"
                  : "navbar-link nav-link"
              }
              to="/"
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </NavLink>
            <NavLink
              className={
                activeLink === "doctors"
                  ? "active navbar-link nav-link"
                  : "navbar-link nav-link"
              }
              to="/doctors"
              onClick={() => onUpdateActiveLink("doctors")}
            >
              Doctors
            </NavLink>

            <NavLink
              className={
                activeLink === "departments"
                  ? "active navbar-link nav-link"
                  : "navbar-link nav-link"
              }
              to="/departments"
              onClick={() => onUpdateActiveLink("departments")}
            >
              Departments
            </NavLink>
            <NavLink
              className={
                activeLink === "about"
                  ? "active navbar-link nav-link"
                  : "navbar-link nav-link"
              }
              to="/about"
              onClick={() => onUpdateActiveLink("about")}
            >
              About US
            </NavLink>
            <NavLink
              className={
                activeLink === "contact"
                  ? "active navbar-link nav-link mb-3"
                  : "navbar-link nav-link mb-3"
              }
              to="/contact"
              onClick={() => onUpdateActiveLink("contact")}
            >
              Contact Us
            </NavLink>
          </Nav>
          <span className="navbar-text">
            {user && user.first_name && (
              <div className="mx-3">Welcome {user.first_name}</div>
            )}
            {!isAuthenticated && (
              <div>
                <Link className="nav_login_button" to="/login" role="button">
                  Login
                </Link>
                <Link className="nav_login_button" to="/signup" role="button">
                  Signup
                </Link>
              </div>
            )}
            {isAuthenticated && !user.profile_complete && (
              <Link className="btn" to="/completedata" role="button">
                Complete Your Profile
              </Link>
            )}
            {user.profile_complete &&
            !user.is_doctor &&
            !user.is_emp &&
            !user.is_superuser ? (
              <Link className="nav_login_button" to="/patient" role="button">
                Dashboard
              </Link>
            ) : null}

            {user.profile_complete && user.is_doctor ? (
              <Link className="nav_login_button" to="/doctor" role="button">
                Dashboard
              </Link>
            ) : null}
               {user.profile_complete && user.is_staff ? (
              <Link className="nav_login_button" to="/doctor" role="button">
                Dashboard
              </Link>
            ) : null}

            {isAuthenticated && (
              <button className=" btn btn-info" onClick={logoutButton}>
                <Link className="" to="/" role="button">
                  Logout
                </Link>
              </button>
            )}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
