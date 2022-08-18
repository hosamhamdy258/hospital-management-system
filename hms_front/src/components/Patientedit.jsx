import React from "react";
import { Link, useParams } from "react-router-dom";

const Patientedit = () => {
  const { id } = useParams();
  return (
    <section id="page-top">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
        integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      {/* <!-- Page Wrapper --> */}
      <div id="wrapper">
        {/* <!-- Sidebar --> */}
        <ul
          className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion mt-5"
          id="accordionSidebar"
        >
          {/* <!-- Sidebar - Brand --> */}
          <Link
            className="sidebar-brand d-flex align-items-center justify-content-center"
            to={`/patient/${id}`}
          >
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">Patient Panel</div>
          </Link>

          {/* <!-- Divider --> */}
          <hr className="sidebar-divider my-0" />

          {/* <!-- Nav Item - Dashboard --> */}
          <li className="nav-item">
            <Link className="nav-link" to={`/patient/${id}`}>
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </Link>
          </li>

          {/* <!-- Divider --> */}
          <hr className="sidebar-divider" />

          {/* <!-- Nav Item - history --> */}
          <li className="nav-item active">
            <Link className="nav-link" to={`/patienthistory/${id}`}>
              <i className="fas fa-fw fa-chart-area"></i>
              <span>History</span>
            </Link>
          </li>

          {/* <!-- Nav Item - edit --> */}
          <li className="nav-item">
            <Link className="nav-link" to={`/patientedit/${id}`}>
              <i className="fas fa-fw fa-edit"></i>
              <span>Edit appointment</span>
            </Link>
          </li>

          {/* <!-- Nav Item - checkout --> */}
          <li className="nav-item">
            <Link className="nav-link" to={`/checkout/${id}`}>
              <i className="fas fa-fw fa-table"></i>
              <span>CheckOut</span>
            </Link>
          </li>

          {/* <!-- Divider --> */}
          <hr className="sidebar-divider d-none d-md-block" />
        </ul>
        {/* <!-- End of Sidebar --> */}

        {/* <!-- Main Content --> */}
        <div className="container-fluid p-5 mt-4">
          {/* <!-- Page Heading --> */}
          <h1 className="h3 text-gray-800">.</h1>

          <h1 className="h3 mb-4 text-gray-800">Current reservations</h1>

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
                    className="d-none d-sm-inline-block btn btn-sm btn-secondary shadow-sm"
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
                  <Link
                    to={"#"}
                    className="d-none d-sm-inline-block btn btn-sm btn-secondary shadow-sm"
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
                  <Link
                    to={"#"}
                    className="d-none d-sm-inline-block btn btn-sm btn-secondary shadow-sm"
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

      <a classNameName="scroll-to-top rounded" href="#page-top">
        <i classNameName="fas fa-angle-up"></i>
      </a>
    </section>
  );
};

export default Patientedit;
