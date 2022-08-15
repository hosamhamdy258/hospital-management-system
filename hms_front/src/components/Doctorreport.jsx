import React from "react";

const Doctorreport = () => {
  return (
    <body id="page-top">
      {/* <!-- Page Wrapper --> */}
      <div id="wrapper">
        {/* <!-- Sidebar --> */}
        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          {/* <!-- Sidebar - Brand --> */}
          <a
            className="sidebar-brand d-flex align-items-center justify-content-center"
            href="/doctor"
          >
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">Doctor Panel</div>
          </a>

          {/* <!-- Divider --> */}
          <hr className="sidebar-divider my-0" />

          {/* <!-- Nav Item - Dashboard --> */}
          <li className="nav-item active">
            <a className="nav-link" href="/doctor">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </a>
          </li>

          {/* <!-- Divider --> */}
          <hr className="sidebar-divider" />

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
            {/* <!-- Topbar --> */}
            {/* <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              <!-- Sidebar Toggle (Topbar) -->
              <button
                id="sidebarToggleTop"
                className="btn btn-link d-md-none rounded-circle mr-3"
              >
                <i className="fa fa-bars"></i>
              </button>

              <!-- Topbar Search -->
              <div className="text-center">
                <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control bg-light border-0 small"
                      placeholder="Search for..."
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="button">
                        <i className="fas fa-search fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <!-- Topbar Navbar -->
              <ul className="navbar-nav ml-auto">
                <!-- Nav Item - Search Dropdown (Visible Only XS) -->
                <li className="nav-item dropdown no-arrow d-sm-none">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="searchDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-search fa-fw"></i>
                  </a>

                  <!-- Nav Item - User Information -->
                </li>

                <li className="nav-item dropdown no-arrow">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="userDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                      Douglas McGee
                    </span>
                    <img
                      className="img-profile rounded-circle"
                      src="img/undraw_profile.svg"
                    />
                  </a>
                  <!-- Dropdown - User Information -->
                  <div
                    className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="userDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                      Profile
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                      Settings
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                      Activity Log
                    </a>
                    <div className="dropdown-divider"></div>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#logoutModal"
                    >
                      <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
            </nav> */}
            {/* <!-- End of Topbar --> */}

            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">
              {/* <!-- Page Heading --> */}
              <div className="align-items-center mb-4">
                <h1 className="h1 mb-2 text-gray-800">Dashboard</h1>
                <div className="row mb-4 text-center justify-content-center">
                  <div className="col-lg-8 col-md-6  border p-4 shadow bg-light">
                    <div className="col-12">
                      <h4 className="m-0 font-weight-bold text-primary">
                        Generate patient report
                      </h4>
                      <hr />
                    </div>
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
                            placeholder="Diagnosis"
                          ></textarea>
                        </div>
                        <div className="col-12 mb-1">
                          <textarea
                            className="form-control"
                            placeholder="recommended Medications"
                          ></textarea>
                        </div>
                        <div className="col-12 mt-5 text-center justify-content-center">
                          <button
                            type="submit"
                            className="btn btn-primary mx-4"
                          >
                            Submit report
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

        {/* <!-- Content Row --> */}
      </div>
      {/* <!-- /.container-fluid --> */}
      {/* <!-- End of Main Content --> */}

      {/* <!-- Footer --> */}
      {/* <footer className="sticky-footer bg-white">
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>Copyright &copy; HMS 2022</span>
          </div>
        </div>
      </footer> */}
      {/* <!-- End of Footer --> */}
      {/* <!-- End of Content Wrapper --> */}
      {/* // <!-- End of Page Wrapper --> */}

      {/* // <!-- Scroll to Top Button--> */}
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
    </body>
  );
};

export default Doctorreport;
