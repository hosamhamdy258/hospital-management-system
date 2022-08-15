const Patienthistory = () => {
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
            href="/patient"
          >
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">Patient Panel</div>
          </a>

          {/* <!-- Divider --> */}
          <hr className="sidebar-divider my-0" />

          {/* <!-- Nav Item - Dashboard --> */}
          <li className="nav-item">
            <a className="nav-link" href="/patient">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </a>
          </li>

          {/* <!-- Divider --> */}
          <hr className="sidebar-divider" />

          {/* <!-- Nav Item - Charts --> */}
          <li className="nav-item active">
            <a className="nav-link" href="/patienthistory">
              <i className="fas fa-fw fa-chart-area"></i>
              <span>History</span>
            </a>
          </li>

          {/* <!-- Nav Item - Tables --> */}
          <li className="nav-item">
            <a className="nav-link" href="/checkout">
              <i className="fas fa-fw fa-table"></i>
              <span>CheckOut</span>
            </a>
          </li>

          {/* <!-- Divider --> */}
          <hr className="sidebar-divider d-none d-md-block" />

          {/* <!-- Sidebar Toggler (Sidebar) --> */}
          {/* button */}
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
              <button
                id="sidebarToggleTop"
                className="btn btn-link d-md-none rounded-circle mr-3"
              >
                <i className="fa fa-bars"></i>
              </button>

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

              <ul className="navbar-nav ml-auto">
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
                </li>
                <div className="topbar-divider d-none d-sm-block"></div>

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
            <div className="container-fluid p-3">
              {/* <!-- Page Heading --> */}
              <h1 className="h3 mb-4 text-gray-800">Reports Hitory</h1>

              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Date</th>
                    <th scope="col">Department</th>
                    <th scope="col">Doctor</th>
                    <th scope="col">Download</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>11/2/2022</td>
                    <td>Cardio</td>
                    <td>Mark</td>
                    <td>
                      <a
                        href="#"
                        className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                      >
                        <i className="fas fa-download fa-sm text-white-50"></i>{" "}
                        Generate Report
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>11/2/2022</td>
                    <td>Cardio</td>
                    <td>Mark</td>
                    <td>
                      <a
                        href="#"
                        className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                      >
                        <i className="fas fa-download fa-sm text-white-50"></i>{" "}
                        Generate Report
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>11/2/2022</td>
                    <td>Cardio</td>
                    <td>Mark</td>
                    <td>
                      <a
                        href="#"
                        className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                      >
                        <i className="fas fa-download fa-sm text-white-50"></i>{" "}
                        Generate Report
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      {/* <footer classNameName="sticky-footer bg-white">
        <div classNameName="container my-auto">
          <div classNameName="copyright text-center my-auto">
            <span>Copyright &copy; HMS 2022</span>
          </div>
        </div>
      </footer> */}

      <a classNameName="scroll-to-top rounded" href="#page-top">
        <i classNameName="fas fa-angle-up"></i>
      </a>
    </body>
  );
};

export default Patienthistory;
