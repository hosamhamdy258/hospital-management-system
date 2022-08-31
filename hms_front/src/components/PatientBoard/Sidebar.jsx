import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      {/* sidebar */}
      <ul
        className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/patient"
        >
          <div className="sidebar-brand-icon">
            <i className="fa-regular fa-hospital"></i>
          </div>
          <div className="sidebar-brand-text mx-3">Patient Panel</div>
        </Link>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <Link className="nav-link" to="/patient">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />

        <li className="nav-item">
          <Link className="nav-link" to={"/patienthistory"}>
            <i className="fas fa-fw fa-chart-area"></i>
            <span>History</span>
          </Link>
        </li>

        {/* <!-- Nav Item - edit --> */}
        <li className="nav-item">
          <Link className="nav-link" to="/patientedit">
            <i className="fas fa-fw fa-edit"></i>
            <span>Edit appointment</span>
          </Link>
        </li>

        {/* <li className="nav-item">
          <Link className="nav-link" to="/checkout">
            <i className="fas fa-fw fa-table"></i>
            <span>CheckOut</span>
          </Link>
        </li> */}

        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      {/* end of side bar */}
    </>
  );
}
