import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <ul
      className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* <!-- Sidebar - Brand --> */}
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to={`/staff/`}
      >
        <div className="sidebar-brand-icon">
          <i className="fa-regular fa-hospital"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Staff Panel</div>
      </Link>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />

      {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item active">
        <Link className="nav-link" to={`/staff/`}>
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}

      {/* <!-- Nav Item - Charts --> */}
      <li className="nav-item">
        <Link className="nav-link" to={`/staffhistory/`}>
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Patients History</span>
        </Link>
      </li>

      {/* <!-- Nav Item - edit --> */}
      <li className="nav-item">
        <Link className="nav-link" to={`/staffedit/`}>
          <i className="fas fa-fw fa-edit"></i>
          <span>Edit patients appointments</span>
        </Link>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
}
