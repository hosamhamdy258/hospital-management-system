import '@progress/kendo-theme-default/dist/all.css';

import { Link, useParams } from "react-router-dom";
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import React, { useEffect } from "react";

import { getMedicalRecordDetails } from "../../store/medicalRecord";
import { jsPDF } from "jspdf";
import logo from "../../assets/img/logo.jpg";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const PatientMedicalRecord = () => {
  const pdfExportComponent = React.useRef(null);

  const handlePdfExport = (e) => {
    e.preventDefault();
    pdfExportComponent.current.save();
  }
  const { id } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.medicalRecordSlice);
  useEffect(() => {
    dispatch(getMedicalRecordDetails(id));
  }, [dispatch]);

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
          {/* <!-- Sidebar --> */}
          <ul
            className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
            id="accordionSidebar"
          >
            {/* <!-- Sidebar - Brand --> */}
            <Link
              className="sidebar-brand d-flex align-items-center justify-content-center"
              to={`/patient/${id}`}
            >
              <div className="sidebar-brand-icon">
                <i className="fa-regular fa-hospital"></i>
              </div>
              <div className="sidebar-brand-text mx-3">Patient Panel</div>
            </Link>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item">
              <Link className="nav-link" to={`/patient/${id}`}>
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>
              </Link>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/* <!-- Nav Item - Charts --> */}
            <li className="nav-item active">
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

            {/* <!-- Nav Item - Tables --> */}
            <li className="nav-item">
              <Link className="nav-link" to={`/checkout/${id}`}>
                <i className="fas fa-fw fa-table"></i>
                <span>CheckOut</span>
              </Link>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block" />
          </ul>
          {/* <!-- End of Sidebar --> */}

          {/* <!-- Content Wrapper --> */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/* <!-- Main Content --> */}
            <div id="content">
              {/* <!-- Begin Page Content --> */}
              <div className="container-fluid p-3">
                {/* <!-- Page Heading --> */}
                <h1 className="h3 mb-4 text-gray-800">your Prescription </h1>
                <div className=" row mb-4 text-center justify-content-center">
                  <div className="report_form col-lg-8 col-md-6  border p-2 shadow bg-light">

                    <div className="col-12">{/* <hr /> */}</div>

                    <form action="" className=" text-start">
                      <PDFExport ref={pdfExportComponent} paperSize="A4">

                        <div id='myform'>
                          <div className="report_header row mx-1 mt-3 mb-1 text-start">
                            <div className=" text-start col-lg-6 col-md-12 col-sm-8" to="/home">
                              <img className='logo_pdf' src={logo} alt="logo" /><span className='report_hsname'>HOPE HMS</span>
                              <br />
                              Menofia , Shebin El Koum
                              <br />
                              +0109-072-0800
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-8 pt-4">
                              <div className=""><span className="medi_rec_labels"> Doctor Name</span> :{state.medicalRecord.doctor_name}</div>
                              <div className=""><span className="medi_rec_labels"> Date</span> :{(state.medicalRecord.added_on) ? state.medicalRecord.added_on.slice(0, 10) : 'Not registered'}</div>
                            </div>
                          </div>
                          <div className="row mx-1 mb-1 text-start pt-3">
                            <label className="col-lg-6 col-md-12 col-sm-8"><span className="medi_rec_labels"> Patient name </span>: {state.medicalRecord.patient_name}</label>
                            <label className="col-lg-6 col-md-12 col-sm-8"> <span className="medi_rec_labels">Age </span> : {state.medicalRecord.patient_age}</label>
                          </div>

                          <div className="row g-3 mt-2 mb-1">
                            <div className="col-12 ">
                              <label className="col-lg-6 col-md-12 col-sm-8"> <span className="medi_rec_labels px-2">Diagnosis : </span> {state.medicalRecord.diagnosis} </label>
                            </div>
                            <div className="col-12 ">
                              <label className="col-lg-6 col-md-12 col-sm-8"> <span className="medi_rec_labels px-2">Recommended Medications : </span> {state.medicalRecord.recommended_medications} </label>

                            </div>

                          </div>

                        </div>
                      </PDFExport>

                      <div className="col-12 mt-5 text-center justify-content-center">
                        <button
                          className="btn btn-success mx-4"
                          onClick={handlePdfExport}

                        >
                          Get pdf Report
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
  )
}




export default PatientMedicalRecord;
