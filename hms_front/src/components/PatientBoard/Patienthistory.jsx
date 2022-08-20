import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getReservationList } from "../../store/reserve";

const Patienthistory = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reservationSlice);
  useEffect(() => {
    dispatch(getReservationList());
  }, [dispatch]);

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
            to={`/patient/${id}`}
          >
            <div className="sidebar-brand-icon">
              <i class="fa-regular fa-hospital"></i>
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

          {/* <!-- Nav Item - Charts --> */}
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

          {/* <!-- Nav Item - Tables --> */}
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

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid p-3">
              {/* <!-- Page Heading --> */}
              <h1 className="h3 mb-4 text-gray-800">Reports Hitory</h1>

              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Date</th>
                    <th scope="col">time</th>
                    <th scope="col">Department</th>
                    <th scope="col">Doctor</th>
                    <th scope="col">Download</th>
                  </tr>
                </thead>
                <tbody>
                  {state.reservation.map((element,index) => {
                    return (
                      <tr>
                        <th scope="row">{index+1}</th>
                        <td>{element.date.slice(0,10)}</td>
                        <td>{element.date.slice(11,16)}</td>
                        <td>{element.department}</td>
                        <td>{element.doctor_name}</td>
                        <td>
                          <Link
                            to={"#"}
                            className="d-sm-inline-block btn btn-sm btn-secondary shadow-sm"
                          >
                            <i className="fas fa-download fa-sm text-white-50"></i>{" "}
                            Generate Report
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
    </section>
  );
};

export default Patienthistory;
