import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <ul
        className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to={`/doctor/`}
        >
          <div className="sidebar-brand-icon">
            <i className="fa-regular fa-hospital"></i>
          </div>
          <div className="sidebar-brand-text mx-3">Doctor Panel</div>
        </Link>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <Link className="nav-link" to={`/doctor/`}>
            {/* <i className="fas fa-fw fa-tachometer-alt"></i> */}
            <span>Dashboard</span>
          </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider d-none d-md-block" />
        <li className="nav-item">
          <Link className="nav-link" to={`/doctorhistory/`}>
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Patients History</span>
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to={`/doctorreport/`}>
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Doctor Report</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={`/doctoredit/`}>
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Doctor Edit</span>
          </Link>
        </li> */}
      </ul>
    </>
  );
}
