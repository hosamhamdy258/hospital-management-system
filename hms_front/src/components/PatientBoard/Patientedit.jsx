import React from "react";
import { Link, useParams } from "react-router-dom";
import Sidebar from './Sidebar';

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
      <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div className="container-fluid p-3">
            {/* <!-- Page Heading --> */}
            <h1 className="h3 mb-4 text-gray-800">Current reservations</h1>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Date2</th>
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
                      <i className="fa-solid fa-calendar-xmark fa-sm text-white-50 mx-1"></i>
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
                      <i className="fa-solid fa-calendar-xmark fa-sm text-white-50 mx-1"></i>
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
                      <i className="fa-solid fa-calendar-xmark fa-sm text-white-50 mx-1"></i>
                      Delete
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
    </section>
  );
};

export default Patientedit;
