import { Link } from "react-router-dom";

const Staffindex = () => {
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
          <li className="nav-item active">
            <Link className="nav-link" to={"/staff"}>
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </Link>
          </li>

          {/* <!-- Divider --> */}
          <hr className="sidebar-divider" />

          {/* <!-- Heading --> */}

          {/* <!-- Nav Item - Charts --> */}
          <li className="nav-item">
            <Link className="nav-link" to={"/staffhistory"}>
              <i className="fas fa-fw fa-chart-area"></i>
              <span>Patients History</span>
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
              <div className="d-sm-flex align-items-center justify-content-center mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
              </div>

              {/* <!-- reserve an appointment --> */}
              <div className="row mb-4 justify-content-center">
                <div className="col-lg-8 col-md-6 border p-4 shadow bg-light">
                  <div className="col-12">
                    <h4 className="m-0 font-weight-bold text-primary">
                      Appointment form
                    </h4>
                    <hr />
                  </div>
                  <form action="">
                    <div className="col-12 mb-2">
                      <h5 className="m-0 font-weight-bold text-primary">
                        Personal ifo
                      </h5>
                    </div>
                    <div className="row mx-2 mb-1">
                      <input
                        type="text"
                        className="form-control col-md-6"
                        id=""
                        placeholder="Enter first name"
                      />
                      <input
                        type="text"
                        className="form-control col-md-6"
                        id=""
                        placeholder="Enter last name"
                      />
                    </div>
                    <div className="row mx-2 mb-1">
                      <label className="col-md-6">Date of birth</label>
                      <div className="col-md-6">
                        <input
                          type="date"
                          className="form-control"
                          placeholder="Enter Date"
                        />
                      </div>
                    </div>
                    <div className="col-12 justify-content-center">
                      <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="Enter Mobile number"
                      />
                    </div>
                    <hr className="Form-divider" />
                    <div className="col-12 mb-2">
                      <h5 className="m-0 font-weight-bold text-primary">
                        Reservation ifo
                      </h5>
                    </div>
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
                    </div>
                    <hr />
                    <div className="col-12 mt-3 text-center">
                      <button type="submit" className="btn btn-primary mx-4">
                        Book Appointment
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary me-2"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
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
      {/* <!-- End of Page Wrapper --> */}

      {/* <!-- Scroll to Top Button--> */}
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
    </body>
  );
};

export default Staffindex;
