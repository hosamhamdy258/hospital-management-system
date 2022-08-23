import { Link, useLocation, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getMedicalRecordDetails } from "../../store/medicalRecord";
import Sidebar from './Sidebar';
const Doctoredit = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.medicalRecordSlice);
  useEffect(() => {
    dispatch(getMedicalRecordDetails(id));
  }, [dispatch]);
  console.log(state)
  const record = state.medicalRecord

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
          {/* <!-- Begin Page Content --> */}
          <div className="container-fluid">
            {/* <!-- Page Heading --> */}
            <div className="align-items-center p-2">
              {/* <h1 className="h2 mb-2 text-gray-800 text-center">Dashboard</h1> */}
              <h4 className="h2 mb-4 text-gray-800 text-center">
                Edit patient report
              </h4>
              <div className="row mb-4 text-center justify-content-center">
                <div className="col-lg-8 col-md-6  border p-4 shadow bg-light">
                  <div className="col-12">{/* <hr /> */}</div>
                  <form action="">
                    <div className="row mx-2 mb-1 d-flex text-start">
                      <label className="col-md-6"><span className="medi_rec_labels">Patient name :</span> {record.patient_name}</label>
                      <label className="col-md-6"><span className="medi_rec_labels">Patient Age :</span> {record.patient_age}</label>
                    </div>
                 
                    <div className="row mx-2 mb-3 text-start">
                      <label className="col-md-6"><span className="medi_rec_labels">Date - Time :</span> {record.added_on?.slice(0, 10)} - {record.added_on?.slice(11,16)}</label>
                    </div>
                    <hr className="cData_hr mb-4"/>
                    <div className="row g-3 mb-1">
                      <div className="d-flex col-12 mb-1">
                        <label className="px-3">Diagnosis </label>
                        <textarea
                          className="form-control"
                        >{record.diagnosis}</textarea>
                      </div>
                      <div className="d-flex col-12 mb-1">
                        <label>Recommended Medications </label>

                        <textarea
                          className="form-control"
                        >
                          {record.recommended_medications}
                        </textarea>
                      </div>
                      <div className="col-12 mt-5 text-center justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-secondary mx-4"
                        >
                          Save edits
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary me-2"
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

export default Doctoredit;
