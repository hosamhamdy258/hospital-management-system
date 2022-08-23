import React from "react";
import { Link, useParams } from "react-router-dom";
import Sidebar from './Sidebar';


const Doctorindex = () => {
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
        <Sidebar />
        {/* <!-- End of Sidebar --> */}

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}

          <div className="container-fluid">
            {/* <!-- Page Heading --> */}
            <div className="align-items-center p-2">
              <h1 className="h2 mb-4 text-gray-800 text-center">
                Todays appointements
              </h1>
              {/* <h3 className="h3 mb-2 text-gray-800 text-center">
                Todays appointements
              </h3> */}

              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Patient name</th>
                    <th scope="col">visit time</th>
                    <th scope="col">Patient age</th>
                    <th scope="col">Begin session</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Omar</td>
                    <td>06:00 PM</td>
                    <td>33</td>
                    <td>
                      <Link
                        to={`/doctorreport/${id.id}`}
                        className="d-none d-sm-inline-block btn btn-sm btn-secondary shadow-sm"
                      >
                        <i className="fas fa-download fa-sm text-white-50"></i>{" "}
                        Generate Report
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Omar</td>
                    <td>06:00 PM</td>
                    <td>33</td>
                    <td>
                      <Link
                        to={`/doctorreport/${id.id}`}
                        className="d-none d-sm-inline-block btn btn-sm btn-secondary shadow-sm"
                      >
                        <i className="fas fa-download fa-sm text-white-50"></i>{" "}
                        Generate Report
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Omar</td>
                    <td>06:00 PM</td>
                    <td>33</td>
                    <td>
                      <Link
                        to={`/doctorreport/${id.id}`}
                        className="d-none d-sm-inline-block btn btn-sm btn-secondary shadow-sm"
                      >
                        <i className="fas fa-download fa-sm text-white-50"></i>{" "}
                        Generate Report
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End of Main Content --> */}
      {/* <!-- End of Page Wrapper --> */}

      {/* <!-- Scroll to Top Button--> */}
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
    </section>
  );
};

export default Doctorindex;
