import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { getReservationList } from "../../store/reserve";
import Table from "react-bootstrap/Table";
const Staffhistory = () => {
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reservationSlice);

  useEffect(() => {
    // dispatch(getReservationList());

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
                Reports Hitory
              </h1>
              <div className="container mb-4 text-center">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"
                >
                  <label htmlFor="search">
                    Enter Patient ID Number / Name / Date
                  </label>
                  <div className="input-group">
                    <input
                      id="search"
                      ref={inputRef}
                      type="text"
                      className="form-control bg-gradient-light border-0 small"
                      placeholder="Search"
                      aria-label="Patient ID Number/name/date"
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
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Date</th>
                    <th scope="col">time</th>
                    <th scope="col">Patient</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Department</th>
                    <th scope="col">Doctor</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {state.reservation &&
                    state.reservation
                      .filter(
                        (element) =>
                          element.patient_phone_number.includes(search) ||
                          element.patient_name
                            .trim()
                            .toLowerCase()
                            .includes(search) ||
                          element.date.includes(search)
                      )
                      .map((element, index) => {
                        return (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{element.date.slice(0, 10)}</td>
                            <td>{element.date.slice(11, 16)}</td>
                            <td>{element.patient_name}</td>
                            <td>
                              <div className="col-1 col-sm-3 col-md-6 text-truncate">
                                {element.patient_phone_number}
                              </div>
                            </td>
                            <td>{element.department}</td>
                            <td>{element.doctor_name}</td>
                            <td>
                              {element.reservation_medical_records.length >
                              0 ? (
                                <Link
                                  to={"/medicalRecord/"}
                                  state={[
                                    element.reservation_medical_records,
                                    "/staffhistory",
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
                      })}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Staffhistory;
