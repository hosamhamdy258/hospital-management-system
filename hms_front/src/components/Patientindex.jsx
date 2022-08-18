import { Link, useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPatientDetails } from "./../store/patient";
import Select from "react-select";

const Patientindex = ({ doctor }) => {
  //try
  const dispatch = useDispatch();
  const state = useSelector((state) => state.patientsSlice);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPatientDetails(id));
  }, [dispatch, id]);

  // reserve try
  const doctorOptions = doctor.doctors.map(function (item) {
    return { value: item.id, label: item.full_name };
  });
  console.log("Doctor options", doctorOptions);
  const data = {};
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  const onChange = (e, str) => {
    // console.log(e);
    // console.log(str);
    data[str] = e.value;
    console.log(data);
  };

  // console.log("parameters test", state.patientDetails);

  return (
    <section id="page-top">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
        integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <div id="wrapper">
        {/* sidebar */}
        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <Link
            className="sidebar-brand d-flex align-items-center justify-content-center"
            to={`/patient/${id}`}
          >
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">Patient Panel</div>
          </Link>

          <hr className="sidebar-divider my-0" />

          <li className="nav-item active">
            <Link className="nav-link" to={`/patient/${id}`}>
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </Link>
          </li>

          <hr className="sidebar-divider" />

          <li className="nav-item">
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

          <li className="nav-item">
            <Link className="nav-link" to={`/checkout/${id}`}>
              <i className="fas fa-fw fa-table"></i>
              <span>CheckOut</span>
            </Link>
          </li>

          <hr className="sidebar-divider d-none d-md-block" />
        </ul>
        {/* end of side bar */}
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            {/* Body  */}
            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-center mb-4 p-3">
                <h1 className="h3  text-gray-800">Dashboard</h1>
              </div>

              <div className="row mb-4 justify-content-center">
                <div className="col-lg-8 col-md-6 border p-4 shadow bg-light">
                  <div className="col-12">
                    <h4 className="m-0 font-weight-bold text-primary">
                      Appointment form
                    </h4>
                    <hr />
                  </div>
                  <form action="" method="post" onSubmit={handleSubmit}>
                    <div className="row mx-1 mb-1">
                      {/* <label className="col-md-6">Select Doctor</label> */}
                      <Select
                        className="form-select col-md-6"
                        options={doctorOptions}
                        name="doctor"
                        onChange={(e) => onChange(e, "doctor")}
                        placeholder="Select doctor"
                      ></Select>
                    </div>
                    {/* <div className="row mx-2 mb-1">
                      <label className="col-md-6">Select Doctor</label>
                      <select className="form-select col-md-6">
                        <option defaultValue>Purpose Of Appointment</option>
                        <option value="4">Web Design</option>
                        <option value="5">Web Development</option>
                        <option value="6">IOS Developemt</option>
                      </select>
                    </div> */}
                    <div className="row g-3 mb-1">
                      <div className="col-md-6">
                        <input
                          type="date"
                          className="form-control"
                          placeholder="Enter Date"
                        />
                      </div>
                      <div className="col-md-6 mb-1">
                        <input
                          type="time"
                          className="form-control"
                          placeholder="Enter Email"
                        />
                      </div>
                      <div className="col-12">
                        <textarea
                          className="form-control"
                          placeholder="Message"
                        ></textarea>
                      </div>
                      <div className="col-12 mt-5">
                        <button type="submit" className="btn btn-primary mx-2">
                          Book Appointment
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary  me-2"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
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

export default Patientindex;
