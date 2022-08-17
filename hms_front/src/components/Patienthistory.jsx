import { Link } from "react-router-dom";

const Patienthistory = () => {
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
            to={"/patient"}
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
            <Link className="nav-link" to={"/patient"}>
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </Link>
          </li>

          {/* <!-- Divider --> */}
          <hr className="sidebar-divider" />

          {/* <!-- Nav Item - Charts --> */}
          <li className="nav-item active">
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

          {/* <!-- Nav Item - Tables --> */}
          <li className="nav-item">
            <Link className="nav-link" to={"/checkout"}>
              <i className="fas fa-fw fa-table"></i>
              <span>CheckOut</span>
            </Link>
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
                      <Link
                        to={"#"}
                        className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                      >
                        <i className="fas fa-download fa-sm text-white-50"></i>{" "}
                        Generate Report
                      </Link>
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
