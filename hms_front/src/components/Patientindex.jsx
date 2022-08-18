import { Link } from "react-router-dom";

const Patientindex = () => {
  return (
    <body id="page-top">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
        integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <div id="wrapper">
        {/* sidebar */}
        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <Link
            className="sidebar-brand d-flex align-items-center justify-content-center"
            to={"/patient"}
          >
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">Patient Panel</div>
          </Link>

          <hr className="sidebar-divider my-0" />

          <li className="nav-item active">
            <Link className="nav-link" to={"/patient"}>
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
            <Link className="nav-link" to={"/patientedit"}>
              <i className="fas fa-fw fa-edit"></i>
              <span>Edit appointment</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to={"/checkout"}>
              <i className="fas fa-fw fa-table"></i>
              <span>CheckOut</span>
            </Link>
          </li>

          <hr className="sidebar-divider d-none d-md-block" />
        </ul>
        {/* end of side bar */}
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
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
