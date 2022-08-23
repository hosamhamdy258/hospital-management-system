import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addMedicalRecord,
  getMedicalRecordDetails,
} from "../../store/medicalRecord";
import Sidebar from "./Sidebar";
const Doctorreport = () => {
  let location = useLocation();
  console.log(location.state);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.doctorsSlice);
  const stateMedical = useSelector((state) => state.medicalRecordSlice);
  const diagnosis = useRef(null);
  const recommended_medications = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      diagnosis: diagnosis.current.value,
      recommended_medications: recommended_medications.current.value,
      reservation: location.state.id,
      added_doctor_id: location.state.doctor,
      patient_id: location.state.patient,
    };
    dispatch(addMedicalRecord(data));
  };
  useEffect(() => {}, [dispatch]);
  const navigate = useNavigate();
  const navigateMSG = () => {
    try {
      navigate("/reportstatus");
    } catch (error) {}
  };

  return (
    <section id="page-top">
      {stateMedical.details && navigateMSG()}
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
          {/* <!-- Begin Page Content --> */}
          <div className="container-fluid">
            {/* <!-- Page Heading --> */}
            <div className="align-items-center p-2">
              {/* <h1 className="h2 mb-2 text-gray-800 text-center">Dashboard</h1> */}
              <h4 className="h2 mb-4 text-gray-800 text-center">
                Generate patient report
              </h4>
              <div className="row mb-4 text-center justify-content-center">
                <div className="col-lg-8 col-md-6  border p-4 shadow bg-light">
                  <div className="col-12">{/* <hr /> */}</div>
                  <form action="" method="post" onSubmit={handleSubmit}>
                    <div className="row mx-2 mb-1">
                      <label className="col-md-6">Patient name</label>
                      <label className="col-md-6">
                        {location.state.patient_name}
                      </label>
                    </div>
                    <div className="row mx-2 mb-1">
                      <label className="col-md-6">Patient Age</label>
                      <label className="col-md-6">
                        {location.state.patient_age}
                      </label>
                    </div>
                    <div className="row mx-2 mb-1">
                      <label className="col-md-6">Date</label>
                      <label className="col-md-6">
                        {location.state.date.slice(0, 10)}
                      </label>
                    </div>
                    <div className="row mx-2 mb-1">
                      <label className="col-md-6">Time</label>
                      <label className="col-md-6">
                        {location.state.date.slice(11, 16)}
                      </label>
                    </div>
                    <div className="row mx-2 mb-1">
                      <label className="col-md-6">Drugs</label>
                      <label className="col-md-6">
                        {location.state.patient_durgs}
                      </label>
                    </div>
                    <div className="row mx-2 mb-1">
                      <label className="col-md-6">Comments</label>
                      <label className="col-md-6">
                        {location.state.patient_comment}
                      </label>
                    </div>
                    <div className="row g-3 mb-1">
                      <div className="col-12 mb-1">
                        <textarea
                          ref={diagnosis}
                          required
                          className="form-control"
                          placeholder="Diagnosis"
                        ></textarea>
                      </div>
                      <div className="col-12 mb-1">
                        <textarea
                          required
                          ref={recommended_medications}
                          className="form-control"
                          placeholder="recommended Medications"
                        ></textarea>
                      </div>
                      <div className="col-12 mt-5 text-center justify-content-center">
                        <button type="submit" className="btn btn-secondary m-4">
                          Submit report
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary me-2"
                          onClick={() => window.history.go(-1)}
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

      {/* <!-- /.container-fluid --> */}
      {/* <!-- End of Main Content --> */}
      {/* <!-- End of Content Wrapper --> */}
      {/* // <!-- End of Page Wrapper --> */}

      {/* // <!-- Scroll to Top Button--> */}
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
    </section>
  );
};

export default Doctorreport;
