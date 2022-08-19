import { Link, useParams } from "react-router-dom";
import { getPatientDetails } from "./../../store/patient";
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import {
  addReservationData,
  addReservationLists,
  getPatientDoctors,
  makeReservation,
  restReservationData,
  updateReservationLists,
} from "./../../store/reserve";
import Button from "react-bootstrap/Button";
import moment from "moment";

const Patientindex = ({ doctor }) => {
  const id = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reservationSlice);

  let timelist2 = [];

  function generateDateTimeLists() {
    let hour;
    let day;
    const timelist = [];
    const datelist = [];
    for (let hours = 10; hours < 18; hours++) {
      hour = moment({ hours });
      timelist.push({
        value: hour.format("H:mm"),
        label: hour.format("H:mm"),
      });
      hour = moment({
        hours,
        minute: 30,
      });

      timelist.push({
        value: hour.format("H:mm"),
        label: hour.format("H:mm"),
      });
    }
    for (let days = 0; days < 14; days++) {
      day = moment().add({ days });
      datelist.push({
        value: day.format("YYYY-MM-DD"),
        label: day.format("dddd YYYY-MM-DD"),
      });
    }
    dispatch(addReservationLists(["timelist", timelist]));
    dispatch(addReservationLists(["datelist", datelist]));
  }
  const doctorOptions = state.doctors.map((item) => {
    return { value: item.id, label: item.full_name };
  });

  const patientOptions = state.patients.map((item) => {
    return { value: item.id, label: item.full_name };
  });

  useEffect(() => {
    dispatch(restReservationData());
    dispatch(getPatientDoctors());
    generateDateTimeLists();
    dispatch(updateReservationLists(true));
    // to be deleted on staff page
    dispatch(addReservationData(["patient", { value: Number(id.id) }]));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const changemenu = useCallback(() => {
    if (state.reservationData.doctor && state.reservationData.date1) {
      const selectedDoctor = state.reservation.filter((element) =>
        element.doctor === state.reservationData.doctor ? element : null
      );

      const selectedDate = selectedDoctor.filter((element) =>
        element.date.slice(0, 10) === state.reservationData.date1
          ? element
          : null
      );

      const reservedTime = [];
      selectedDate.forEach((element) => {
        reservedTime.push(element.date.slice(11, 16));
      });

      timelist2 = state.reservationData.timelist.filter((element) => {
        return !reservedTime.includes(element.label);
      });

      dispatch(addReservationLists(["timelist2", timelist2]));
      if (Object.values(state.reservationData).every((element) => element)) {
        dispatch(updateReservationLists(false));
      }
    }
  }, [timelist2]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state.reservationData);
    dispatch(makeReservation(state.reservationData));
  };
  useEffect(() => {
    changemenu();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    state.reservationData.doctor,
    state.reservationData.date1,
    state.reservationData.time,
    state.reservationData.patient,
  ]);
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
          className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <Link
            className="sidebar-brand d-flex align-items-center justify-content-center"
            to={`/patient/${id.id}`}
          >
            <div className="sidebar-brand-icon">
              <i class="fa-regular fa-hospital"></i>
            </div>
            <div className="sidebar-brand-text mx-3">Patient Panel</div>
          </Link>

          <hr className="sidebar-divider my-0" />

          <li className="nav-item active">
            <Link className="nav-link" to={`/patient/${id.id}`}>
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </Link>
          </li>

          <hr className="sidebar-divider" />

          <li className="nav-item">
            <Link className="nav-link" to={`/patienthistory/${id.id}`}>
              <i className="fas fa-fw fa-chart-area"></i>
              <span>History</span>
            </Link>
          </li>

          {/* <!-- Nav Item - edit --> */}
          <li className="nav-item">
            <Link className="nav-link" to={`/patientedit/${id.id}`}>
              <i className="fas fa-fw fa-edit"></i>
              <span>Edit appointment</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to={`/checkout/${id.id}`}>
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
              <div className="d-sm-flex align-items-center justify-content-center p-3">
                <h1 className="h3  text-gray-800">Dashboard</h1>
              </div>

              <div className="row mb-4 justify-content-center">
                <div className="col-lg-8 col-md-6 border p-4 shadow bg-light">
                  <div className="col-12">
                    <h4 className="m-0 font-weight-bold text-dark">
                      Appointment form
                    </h4>
                    <hr />
                  </div>
                  <form action="" method="post" onSubmit={handleSubmit}>
                    <div className="row mx-1 mb-2">
                      <label className="col-md-6">Select Adoctor</label>
                      <Select
                        placeholder="select a doctor"
                        className="col-md-6"
                        options={doctorOptions}
                        onChange={(e) =>
                          dispatch(addReservationData(["doctor", e]))
                        }
                      />
                    </div>
                    {/* <Select
                      placeholder="select a patient"
                      className="w-25 m-auto"
                      options={patientOptions}
                      onChange={(e) =>
                        dispatch(addReservationData(["patient", e]))
                      }
                    />
                    <br /> */}
                    <div className="row mx-1 mb-2">
                      <label className="col-md-6">Select Date</label>
                      <Select
                        placeholder="select a date"
                        className=" col-md-6"
                        options={state.reservationData.datelist}
                        onChange={(e) =>
                          dispatch(addReservationData(["date1", e]))
                        }
                      />
                    </div>
                    <div className="row mx-1 mb-2">
                      <label className="col-md-6">Select time</label>
                      <Select
                        placeholder="select a time"
                        className="col-md-6"
                        options={state.reservationData.timelist2}
                        onChange={(e) =>
                          dispatch(addReservationData(["time", e]))
                        }
                      />
                    </div>
                    <br />
                    <div className="row g-3 mb-1">
                      <div className="col-12 mt-5  text-center">
                        <button
                          type="submit"
                          className="btn btn-secondary mx-3"
                          disabled={state.reservationData.isDisabled}
                        >
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
