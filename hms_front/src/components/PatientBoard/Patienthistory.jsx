import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { getPatientDetails } from "../../store/patient";

const Patienthistory = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.patientsSlice);
  const userstate = useSelector((state) => state.users.user);
  console.log(userstate.linked_users);

  useEffect(() => {
    // dispatch(getReservationList());

    dispatch(getPatientDetails(userstate.linked_users));
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
        <Sidebar />

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid p-3">
              {/* <!-- Page Heading --> */}
              <h1 className="h3 mb-4 text-gray-800">Reports History</h1>

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
                  {state.patientDetails.patient_reserves &&
                    state.patientDetails.patient_reserves.map(
                      (element, index) => {
                        return (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{element.date.slice(0, 10)}</td>
                            <td>{element.date.slice(11, 16)}</td>
                            <td>{element.department}</td>
                            <td>{element.doctor_name}</td>
                            <td>
                              {element.reservation_medical_records.length >
                              0 ? (
                                <Link
                                  to={"/medicalRecord/"}
                                  state={[
                                    element.reservation_medical_records,
                                    "/patienthistory",
                                  ]}
                                  className="d-sm-inline-block btn btn-sm btn-secondary shadow-sm"
                                >
                                  <i className="fas fa-download fa-sm text-white-50"></i>{" "}
                                  Get Report
                                </Link>
                              ) : null}
                            </td>
                          </tr>
                        );
                      }
                    )}
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
