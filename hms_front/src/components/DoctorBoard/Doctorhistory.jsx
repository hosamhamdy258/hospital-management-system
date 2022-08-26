import { Link, useParams } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getDoctorDetails } from "../../store/Doctors";
import moment from "moment";
import Sidebar from "./Sidebar";
const Doctorhistory = () => {
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.doctorsSlice);
  const userstate = useSelector((state) => state.users.user);

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
          <div id="content">
            {/* <!-- Topbar --> */}

            {/* <!-- End of Topbar --> */}

            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid p-2">
              {/* <!-- Page Heading --> */}
              <h1 className="h3 mb-4 text-gray-800 text-center">
                Reports History
              </h1>
              <div className="container mb-4 text-center">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"
                >
                  <label htmlFor="search">
                    Enter Patient Name / Reservation Date
                  </label>
                  <div className="input-group">
                    <input
                      id="search"
                      ref={inputRef}
                      type="text"
                      className="form-control bg-gradient-light border-0 small"
                      placeholder="Search"
                      aria-label="Patient name/date"
                      aria-describedby="basic-addon2"
                      onChange={(e) =>
                        e.target.value
                          ? setSearch(e.target.value.trim().toLowerCase())
                          : setSearch("")
                      }
                    />
                    <button
                      onClick={(e) =>
                        inputRef.current.value
                          ? setSearch(
                              inputRef.current.value.trim().toLowerCase()
                            )
                          : setSearch("")
                      }
                      className="btn btn-primary"
                      type="button"
                    >
                      <i className="fas fa-arrow-right fa-sm"></i>
                    </button>
                  </div>
                </form>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Patient Name</th>
                    <th scope="col">Patient Age</th>
                    <th scope="col">Reservation Date</th>
                    <th scope="col">Reservation Time</th>
                    <th scope="col">Edit Report</th>
                  </tr>
                </thead>
                <tbody>
                  {state.doctorDetails.doctor_reserves &&
                    state.doctorDetails.doctor_reserves
                      .filter(
                        (element) =>
                          element.patient_name
                            .trim()
                            .toLowerCase()
                            .includes(search) || element.date.includes(search)
                      )
                      .map(
                        (element, key) =>
                          moment().isAfter(element.date, "minute") && (
                            <tr key={element.id}>
                              <th scope="row">#</th>
                              <td>{element.patient_name}</td>
                              <td>{element.patient_age}</td>
                              <td>{element.date.slice(0, 10)}</td>
                              <td>{element.date.slice(11, 16)}</td>
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
                                    to={`/doctoredit/`}
                                    state={element}
                                    className=" d-sm-inline-block btn btn-sm btn-success shadow-sm"
                                  >
                                    <i className="fas fa-edit fa-sm text-white-50"></i>{" "}
                                    Edit Report
                                  </Link>
                                )}
                              </td>
                            </tr>
                          )
                      )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctorhistory;
