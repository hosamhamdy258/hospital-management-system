const Patientindex = () => {
  return (
    <body id="page-top">
      <div id="wrapper">
        {/* sidebar */}
        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <a
            className="sidebar-brand d-flex align-items-center justify-content-center"
            href="/patient"
          >
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">Patient Panel</div>
          </a>

          <hr className="sidebar-divider my-0" />

          <li className="nav-item active">
            <a className="nav-link" href="/patient">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </a>
          </li>

          <hr className="sidebar-divider" />

          <li className="nav-item">
            <a className="nav-link" href="/patienthistory">
              <i className="fas fa-fw fa-chart-area"></i>
              <span>History</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/checkout">
              <i className="fas fa-fw fa-table"></i>
              <span>CheckOut</span>
            </a>
          </li>

          <hr className="sidebar-divider d-none d-md-block" />
        </ul>
        {/* end of side bar */}
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            {/* top bar  */}
            {/* <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              <button
                id="sidebarToggleTop"
                className="btn btn-link d-md-none rounded-circle mr-3"
              >
                <i className="fa fa-bars"></i>
              </button>

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
            {/* Body  */}
            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-center mb-4 p-3">
                <h1 className="h3  text-gray-800">Dashboard</h1>
                {/* Button */}
                {/* <a
                  href="#"
                  className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                >
                  <i className="fas fa-download fa-sm text-white-50"></i>{" "}
                  Generate Report
                </a> */}
              </div>

              <div className="row mb-4 justify-content-center">
                <div className="col-lg-8 col-md-6 border p-4 shadow bg-light">
                  <div className="col-12">
                    <h4 className="m-0 font-weight-bold text-primary">
                      Appointment form
                    </h4>
                    <hr />
                  </div>
                  <form action="">
                    <div className="row mx-2 mb-1">
                      <label className="col-md-6">Select department</label>
                      <select className="form-select col-md-6">
                        <option selected>Purpose Of Appointment</option>
                        <option value="1">Web Design</option>
                        <option value="2">Web Development</option>
                        <option value="3">IOS Developemt</option>
                      </select>
                    </div>
                    <div className="row mx-2 mb-1">
                      <label className="col-md-6">Select Doctor</label>
                      <select className="form-select col-md-6">
                        <option selected>Purpose Of Appointment</option>
                        <option value="4">Web Design</option>
                        <option value="5">Web Development</option>
                        <option value="6">IOS Developemt</option>
                      </select>
                    </div>
                    <div className="row g-3 mb-1">
                      <div className="col-md-6">
                        <input
                          type="date"
                          className="form-control"
                          placeholder="Enter Date"
                        />
                      </div>
                      <div className="col-md-6 mb-1">
                        <input
                          type="time"
                          className="form-control"
                          placeholder="Enter Email"
                        />
                      </div>
                      <div className="col-12">
                        <textarea
                          className="form-control"
                          placeholder="Message"
                        ></textarea>
                      </div>
                      <div className="col-12 mt-5">
                        <button
                          type="submit"
                          className="btn btn-primary float-end"
                        >
                          Book Appointment
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary float-end me-2"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* to show last report */}
              {/* <div className="row mb-4 justify-content-center">
                <div className="card shadow col-lg-8 col-md-6  border p-4 shadow bg-light">
                  <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h4 className="m-0 font-weight-bold text-primary">
                      Your medical reort
                    </h4>
                    <div className="dropdown no-arrow">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <div className="dropdown-header">Dropdown Header:</div>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body text-center">
                    <img
                      src="/img/noreports.jpg"
                      alt="reports"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      {/* <footer className="sticky-footer bg-white">
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>Copyright &copy; HMS 2022</span>
          </div>
        </div>
      </footer> */}

      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
    </body>
  );
};

export default Patientindex;
