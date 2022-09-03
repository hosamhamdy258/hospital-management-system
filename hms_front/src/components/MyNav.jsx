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
  const [activeLink, setActiveLink] = useState("");
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
  let currentPage = window.location.pathname.split("/")[1];

  const onUpdateActiveLink = (value) => {
    var elements = document.getElementsByClassName("active");
    console.log(currentPage);
    setActiveLink(value);
  };

  const logoutButton = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

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
                activeLink == "home" &&
                currentPage !== "departments" &&
                currentPage !== "about" &&
                currentPage !== "contact"
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
                activeLink === "doctors" &&
                currentPage !== "departments" &&
                currentPage !== "about"
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
                activeLink == "departments" &&
                currentPage !== "departments" &&
                currentPage !== "about"
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
                activeLink == "about" &&
                currentPage !== "departments" &&
                currentPage !== "about"
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
                activeLink == "contact" &&
                currentPage !== "departments" &&
                currentPage !== "about"
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
              <div
                className="nameOnNavSpan mx-1"
                onCopy={(e) => {
                  e.preventDefault();
                  return false;
                }}
              >
                Welcome {user.first_name}
              </div>
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
            !user.is_staff ? (
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
              <Link className="nav_login_button" to="/staff" role="button">
                Dashboard
              </Link>
            ) : null}

            {isAuthenticated && (
              <Link
                className="nav_login_button logOut"
                onClick={() => logoutButton()}
                to="/"
                role="button"
              >
                Logout
              </Link>
            )}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
