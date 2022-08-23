import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
export default function ReserveReply() {
  const state = useSelector((state) => state.reservationSlice);
  const state2 = useSelector((state) => state.medicalRecordSlice);

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
              <h1 className="h3 mb-4 text-gray-800">Reserve Status</h1>
              <div className="text-center">
                <h3 className="h4 text-gray-800 mb-4">{state.details}</h3>
                <button
                  onClick={() => window.history.go(-2)}
                  className="btn btn-secondary"
                >
                  <i className="fa-solid fa-arrow-left mx-2"></i>
                  <span>Back</span>
                </button>
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
}
