import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getDoctorDetails } from "../../store/Doctors";
import moment from "moment";

const Doctorindex = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.doctorsSlice);
  const userstate = useSelector((state) => state.users.user);

  console.log(userstate.linked_users);

  useEffect(() => {
    dispatch(getDoctorDetails(userstate.linked_users));
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
        <Sidebar />
        {/* <!-- End of Sidebar --> */}

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}

          <div className="container-fluid">
            {/* <!-- Page Heading --> */}
            <div className="align-items-center p-2">
              <h1 className="h2 mb-4 text-gray-800 text-center">
                Today Appointements
              </h1>
              {/* <h3 className="h3 mb-2 text-gray-800 text-center">
                Todays appointements
              </h3> */}

              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Patient name</th>
                    <th scope="col">Date</th>
                    <th scope="col">Visit Time</th>
                    <th scope="col">Patient age</th>
                    <th scope="col">Session Report</th>
                  </tr>
                </thead>
                <tbody>
                  {state.doctorDetails.doctor_reserves &&
                    state.doctorDetails.doctor_reserves.map(
                      (element, index) => {
                        if (moment().isSame(element.date, "day")) {
                          return (
                            <tr key={element.id}>
                              <th scope="row">#</th>
                              <td>{element.patient_name}</td>
                              <td>{element.date.slice(0, 10)}</td>
                              <td>{element.date.slice(11, 16)}</td>
                              <td>{element.patient_age}</td>
                              <td>
                                {element.reservation_medical_records.length ===
                                0 ? (
                                  <Link
                                    to={`/doctorreport/`}
                                    state={element}
                                    className="d-none d-sm-inline-block btn btn-sm btn-secondary shadow-sm"
                                  >
                                    <i className="fas fa-download fa-sm text-white-50"></i>{" "}
                                    Generate Report
                                  </Link>
                                ) : (
                                  <Link
                                    to={""}
                                    state={element}
                                    className="d-none d-sm-inline-block btn btn-sm btn-success shadow-sm"
                                  >
                                    <i className="fas fa-download fa-sm text-white-50"></i>{" "}
                                    Completed
                                  </Link>
                                )}
                              </td>
                            </tr>
                          );
                        }
                        return null;
                      }
                    )}
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
