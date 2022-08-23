import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getDoctorDetails } from "../../store/Doctors";
import moment from "moment";
import Sidebar from './Sidebar';
const Doctorhistory = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.doctorsSlice);
  useEffect(() => {
    dispatch(getDoctorDetails(id));
  }, [dispatch]);
  const reservations = state.doctorDetails.doctor_reserves;
 

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
                <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control bg-gradient-light border-0 small"
                      placeholder="Enter Patient id"
                      aria-label="Search patient"
                      aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="button">
                        <i className="fas fa-arrow-right fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Reservation Date</th>
                    <th scope="col">Patient Name</th>
                    <th scope="col">Edit Report</th>
                  </tr>
                </thead>
                <tbody>

                  {reservations?.map((item,key) => (
                    moment().isAfter(item.date)&&
                    <tr key={key}>
                      <th scope="row">{key}</th>
                      <td>{item.date.slice(0,10)}</td>
                      <td>{item.patient_name}</td>
                      <td>
                     { item.reservation_medical_records.length !== 0 && <Link
                          to={`/doctoredit/${item.reservation_medical_records}` }
                          className=" d-sm-inline-block btn btn-sm btn-secondary shadow-sm"
                        >
                          <i className="fas fa-edit fa-sm text-white-50"></i> Edit
                          Report
                        </Link>}
                       
                      </td>
                    </tr>
                  ))}
                 
                  {/* <tr>
                    <th scope="row">2</th>
                    <td>11/2/2022</td>
                    <td>Mark</td>
                    <td>
                      <Link
                        to={`/doctoredit/${id}`}
                        className=" d-sm-inline-block btn btn-sm btn-secondary shadow-sm"
                      >
                        <i className="fas fa-edit fa-sm text-white-50"></i> Edit
                        Report
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>11/2/2022</td>
                    <td>Mark</td>
                    <td>
                      <Link
                        to={`/doctoredit/${id}`}
                        className=" d-sm-inline-block btn btn-sm btn-secondary shadow-sm"
                      >
                        <i className="fas fa-edit fa-sm text-white-50"></i> Edit
                        Report
                      </Link>
                    </td>
                  </tr> */}
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
