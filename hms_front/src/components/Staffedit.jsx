import React from "react";
import { Link } from "react-router-dom";

const Staffedit = () => {
  return (
    <body id="page-top">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
        integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      {/* <!-- Page Wrapper --> */}
      <div id="wrapper">
        {/* <!-- Sidebar --> */}
        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          {/* <!-- Sidebar - Brand --> */}
          <Link
            className="sidebar-brand d-flex align-items-center justify-content-center"
            to={"/staff"}
          >
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">Staff Panel</div>
          </Link>

          {/* <!-- Divider --> */}
          <hr className="sidebar-divider my-0" />

          {/* <!-- Nav Item - Dashboard --> */}
          <li className="nav-item">
            <Link className="nav-link" to={"/staff"}>
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </Link>
          </li>

          {/* <!-- Divider --> */}
          <hr className="sidebar-divider" />

          {/* <!-- Heading --> */}

          {/* <!-- Nav Item - Charts --> */}
          <li className="nav-item active">
            <Link className="nav-link" to={"/staffhistory"}>
              <i className="fas fa-fw fa-chart-area"></i>
              <span>patient history</span>
            </Link>
          </li>

          {/* <!-- Nav Item - edit --> */}
          <li className="nav-item">
            <Link className="nav-link" to={"/staffedit"}>
              <i className="fas fa-fw fa-edit"></i>
              <span>Edit patients appointments</span>
            </Link>
          </li>

          {/* <!-- Divider --> */}
          <hr className="sidebar-divider d-none d-md-block" />

          {/* <!-- Sidebar Toggler (Sidebar) --> */}
          {/* <div className="text-center d-none d-md-inline">
            <button
              className="rounded-circle border-0"
              id="sidebarToggle"
            ></button>
          </div> */}
        </ul>
        {/* <!-- End of Sidebar --> */}

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            {/* <!-- End of Topbar --> */}

            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">
              {/* <!-- Page Heading --> */}
              <h1 className="h3 mb-4 text-gray-800">Patients reservations</h1>
              <div className="container mb-4 text-center">
                <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control bg-gradient-light border-0 small"
                      placeholder="Enter Patient id"
                      aria-label="Search patient"
                      aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="button">
                        <i className="fas fa-arrow-right fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Date</th>
                    <th scope="col">Doctor</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>11/2/2022</td>
                    <td>Mark</td>
                    <td>
                      <Link
                        to={"#"}
                        className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                      >
                        <i className="fas fa-edit fa-sm text-white-50"></i> Edit
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={"#"}
                        className="d-none d-sm-inline-block btn btn-sm btn-danger shadow-sm"
                      >
                        {/* <i className="fas fa-delete fa-sm text-white-50"></i> */}
                        <i class="fa-solid fa-calendar-xmark fa-sm text-white-50 mx-1"></i>
                        Delete
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>11/2/2022</td>
                    <td>Mark</td>
                    <td>
                      <a
                        href="#"
                        className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                      >
                        <i className="fas fa-edit fa-sm text-white-50"></i> Edit
                      </a>
                    </td>
                    <td>
                      <Link
                        to={"#"}
                        className="d-none d-sm-inline-block btn btn-sm btn-danger shadow-sm"
                      >
                        {/* <i className="fas fa-delete fa-sm text-white-50"></i> */}
                        <i class="fa-solid fa-calendar-xmark fa-sm text-white-50 mx-1"></i>
                        Delete
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>11/2/2022</td>
                    <td>Mark</td>
                    <td>
                      <Link
                        to={"#"}
                        className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                      >
                        <i className="fas fa-edit fa-sm text-white-50"></i> Edit
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={"#"}
                        className="d-none d-sm-inline-block btn btn-sm btn-danger shadow-sm"
                      >
                        {/* <i className="fas fa-delete fa-sm text-white-50"></i> */}
                        <i class="fa-solid fa-calendar-xmark fa-sm text-white-50 mx-1"></i>
                        Delete
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Staffedit;
