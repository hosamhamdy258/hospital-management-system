import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";

import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { deleteReservation, restReservationData } from "../../store/reserve";
import moment from "moment";
import { getPatientDetails } from "../../store/patient";

const Patientedit = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.patientsSlice);
  const userstate = useSelector((state) => state.users.user);
  const stateReserve = useSelector((state) => state.reservationSlice);

  console.log(userstate.linked_users);

  useEffect(() => {
    dispatch(restReservationData());

    dispatch(getPatientDetails(userstate.linked_users));
  }, [dispatch]);

  useEffect(() => {
    if (stateReserve.details) {
      navigateMSG();
    }
  }, [stateReserve.details]);

  const navigate = useNavigate();

  const navigateMSG = () => {
    try {
      navigate("/reserverstatus");
    } catch (error) {}
  };
  return (
    <section id="page-top">
      {/* {stateReserve.details && navigateMSG()} */}
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

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Date</th>
                  <th scope="col">time</th>
                  <th scope="col">Department</th>
                  <th scope="col">Doctor</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {state.patientDetails.patient_reserves &&
                  state.patientDetails.patient_reserves.map(
                    (element, index) => {
                      if (moment().isBefore(element.date, "minute")) {
                        return (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{element.date.slice(0, 10)}</td>
                            <td>{element.date.slice(11, 16)}</td>
                            <td>{element.department}</td>
                            <td>{element.doctor_name}</td>

                            {!moment().isSame(element.date, "day") ? (
                              <td>
                                <button
                                  className="d-none d-sm-inline-block btn btn-sm btn-danger shadow-sm"
                                  onClick={() => {
                                    dispatch(deleteReservation(element.id));
                                  }}
                                >
                                  <i className="fa-solid fa-calendar-xmark fa-sm text-white-50 mx-1"></i>
                                  Delete
                                </button>
                              </td>
                            ) : (
                              <td></td>
                            )}
                          </tr>
                        );
                      }
                      return null;
                    }
                  )}
              </tbody>
            </Table>
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
