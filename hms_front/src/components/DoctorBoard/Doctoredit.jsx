import React from "react";
import { Link, useParams } from "react-router-dom";

const Doctoredit = () => {
  const id = useParams();

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
          className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          {/* <!-- Sidebar - Brand --> */}
          <Link
            className="sidebar-brand d-flex align-items-center justify-content-center"
            to={`/doctor/${id.id}`}
          >
            <div className="sidebar-brand-icon">
              <i class="fa-regular fa-hospital"></i>
            </div>
            <div className="sidebar-brand-text mx-3">Doctor Panel</div>
          </Link>
          {/* <!-- Divider --> */}
          <hr className="sidebar-divider my-0" />
          {/* <!-- Nav Item - Dashboard --> */}
          <li className="nav-item">
            <Link className="nav-link" to={`/doctor/${id.id}`}>
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </Link>
          </li>
          {/* <!-- Divider --> */}
          <hr className="sidebar-divider d-none d-md-block" />
          <li className="nav-item">
            <Link className="nav-link" to={`/doctorhistory/${id.id}`}>
              <i className="fas fa-fw fa-chart-area"></i>
              <span>patients history</span>
            </Link>
          </li>{" "}
        </ul>
        {/* <!-- End of Sidebar --> */}

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          {/* <!-- Begin Page Content --> */}
          <div className="container-fluid">
            {/* <!-- Page Heading --> */}
            <div className="align-items-center p-2">
              {/* <h1 className="h2 mb-2 text-gray-800 text-center">Dashboard</h1> */}
              <h4 className="h2 mb-4 text-gray-800 text-center">
                Edit patient report
              </h4>
              <div className="row mb-4 text-center justify-content-center">
                <div className="col-lg-8 col-md-6  border p-4 shadow bg-light">
                  <div className="col-12">{/* <hr /> */}</div>
                  <form action="">
                    <div className="row mx-2 mb-1">
                      <label className="col-md-6">Patient name</label>
                      <label className="col-md-6">Omar</label>
                    </div>
                    <div className="row mx-2 mb-1">
                      <label className="col-md-6">Patient Age</label>
                      <label className="col-md-6">35</label>
                    </div>
                    <div className="row mx-2 mb-1">
                      <label className="col-md-6">Date - time</label>
                      <label className="col-md-6">22/02/2022 06:30 PM</label>
                    </div>
                    <div className="row g-3 mb-1">
                      <div className="col-12 mb-1">
                        <textarea
                          className="form-control"
                          placeholder="Placeholder for Diagnosis of database"
                        ></textarea>
                      </div>
                      <div className="col-12 mb-1">
                        <textarea
                          className="form-control"
                          placeholder="Place holder for Medications from data base"
                        ></textarea>
                      </div>
                      <div className="col-12 mt-5 text-center justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-secondary mx-4"
                        >
                          Save edits
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary me-2"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- /.container-fluid --> */}
      {/* <!-- End of Main Content --> */}
      {/* <!-- End of Content Wrapper --> */}
      {/* // <!-- End of Page Wrapper --> */}

      {/* // <!-- Scroll to Top Button--> */}
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
    </section>
  );
};

export default Doctoredit;
