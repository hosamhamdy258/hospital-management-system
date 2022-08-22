import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getUpcomingReservationList } from "../../store/reserve";
import moment from "moment";

const Patientedit = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reservationSlice);
  // const hour = moment().format("YYYY-MM-DD");
  // console.log(hour);
  state.upComingReservation.map((element) => {
    // console.log(hour.format("YYYY-MM-DD").isSame(element.date));
    // console.log(moment(hour).isSame(element.date,"day"))
    console.log(moment().isSame(element.date, "day"));
    return null;
  });
  useEffect(() => {
    dispatch(getUpcomingReservationList());
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
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div className="container-fluid p-3">
            {/* <!-- Page Heading --> */}
            <h1 className="h3 mb-4 text-gray-800">Current reservations</h1>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Date</th>
                  <th scope="col">time</th>
                  <th scope="col">Department</th>
                  <th scope="col">Doctor</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {state.upComingReservation.map((element, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{element.date.slice(0, 10)}</td>
                      <td>{element.date.slice(11, 16)}</td>
                      <td>{element.department}</td>
                      <td>{element.doctor_name}</td>

                      {!moment().isSame(element.date, "day") ? (
                        <>
                          <td>
                            <Link
                              to={"#"}
                              className="d-none d-sm-inline-block btn btn-sm btn-secondary shadow-sm"
                            >
                              <i className="fas fa-edit fa-sm text-white-50"></i>{" "}
                              Edit
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
                        </>
                      ) : (
                        <>
                          <td></td>
                          <td></td>
                        </>
                      )}
                    </tr>
                  );
                })}
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
