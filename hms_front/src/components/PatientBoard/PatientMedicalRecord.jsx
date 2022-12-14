import "@progress/kendo-theme-default/dist/all.css";

import { useLocation, useNavigate } from "react-router-dom";
import { PDFExport } from "@progress/kendo-react-pdf";
import React from "react";

import logo from "../../assets/img/logo.jpg";
import Sidebar from "./Sidebar";

const PatientMedicalRecord = () => {
  const location = useLocation();
  const report = location.state[0][0];

  const pdfExportComponent = React.useRef(null);

  const handlePdfExport = (e) => {
    e.preventDefault();
    pdfExportComponent.current.save();
  };

  const navigate = useNavigate();

  const navigateBack = () => {
    try {
      navigate(location.state[1]);
    } catch (error) {}
  };

  return (
    <>
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
                {/* <h1 className="h3 mb-4 text-gray-800">your Prescription </h1> */}
                <div className=" row mb-4 text-center justify-content-center">
                  <div className="report_form col-lg-8 col-md-6  border p-2 shadow bg-light">
                    <div className="col-12">{/* <hr /> */}</div>

                    <form action="" className=" text-start">
                      <PDFExport ref={pdfExportComponent} paperSize="A4">
                        <div id="myform">
                          <div className="report_header row mx-1 mt-3 mb-1 text-start">
                            <div
                              className=" text-start col-lg-6 col-md-12 col-sm-8"
                              to="/home"
                            >
                              <img className="logo_pdf" src={logo} alt="logo" />
                              <span className="report_hsname">HOPE HMS</span>
                              <br />
                              Menofia , Shebin El Koum
                              <br />
                              +0109-072-0800
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-8 pt-4">
                              <div className="">
                                <span className="medi_rec_labels">
                                  {" "}
                                  Doctor Name
                                </span>{" "}
                                :{report.doctor_name}
                              </div>
                              <div className="">
                                <span className="medi_rec_labels"> Date</span> :
                                {report.added_on
                                  ? report.added_on.slice(0, 10)
                                  : "Not registered"}
                              </div>
                            </div>
                          </div>
                          <div className="row mx-1 mb-1 text-start pt-3">
                            <label className="col-lg-6 col-md-12 col-sm-8">
                              <span className="medi_rec_labels">
                                {" "}
                                Patient name{" "}
                              </span>
                              : {report.patient_name}
                            </label>
                            <label className="col-lg-6 col-md-12 col-sm-8">
                              {" "}
                              <span className="medi_rec_labels">
                                Age{" "}
                              </span> : {report.patient_age}
                            </label>
                          </div>

                          <div className="row g-3 mt-2 mb-1">
                            <div className="col-12 ">
                              <label className="col-lg-6 col-md-12 col-sm-8">
                                {" "}
                                <span className="medi_rec_labels px-2">
                                  Diagnosis :{" "}
                                </span>{" "}
                                {report.diagnosis}{" "}
                              </label>
                            </div>
                            <div className="col-12 ">
                              <label className="col-lg-6 col-md-12 col-sm-8">
                                {" "}
                                <span className="medi_rec_labels px-2">
                                  Recommended Medications :{" "}
                                </span>{" "}
                                {report.recommended_medications}{" "}
                              </label>
                            </div>
                          </div>
                        </div>
                      </PDFExport>

                      <div className="col-12 mt-3 mb-4 text-center justify-content-center">
                        <button
                          className="btn btn-success mx-4"
                          onClick={handlePdfExport}
                        >
                          Get pdf Report
                        </button>

                        <button
                          onClick={() => navigateBack()}
                          className="btn btn-secondary m-3"
                        >
                          <i className="fa-solid fa-arrow-left m-2"></i>
                          <span>Back</span>
                        </button>
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
    </>
  );
};

export default PatientMedicalRecord;
