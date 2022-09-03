import { useNavigate } from "react-router-dom";
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import {
  addReservationData,
  addReservationLists,
  getPatientDoctors,
  makeReservation,
  resetReservationDate,
  resetReservationTime,
  restReservationData,
  restReservationDepartment,
  restReservationDoctor,
  updateReservationLists,
} from "./../../store/reserve";
import moment from "moment";
import Sidebar from "./Sidebar";

const Staffindex = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reservationSlice);
  const stateDepartment = useSelector((state) => state.departmentsSlice);

  let timelist2 = [];
  let doctorOptions = [];

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
  const departmentOptions = stateDepartment.departments.map((item) => {
    return { value: item.id, label: item.name };
  });

  const patientOptions = state.patients.map((item) => {
    return { value: item.id, label: item.full_name };
  });

  useEffect(() => {
    dispatch(restReservationData());
    dispatch(getPatientDoctors());
    generateDateTimeLists();
    dispatch(updateReservationLists(true));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const changemenu = useCallback(() => {
    generateDateTimeLists();

    if (state.reservationData.department) {
      doctorOptions = stateDepartment.departments
        .filter((element) => element.id === state.reservationData.department)[0]
        .doctor_department.map((item) => {
          return { value: item.id, label: item.full_name };
        });
      dispatch(addReservationLists(["doctorOptions", doctorOptions]));

      if (
        state.reservationData.doctor &&
        state.reservationData.date1 &&
        state.reservationData.department
      ) {
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
    }
  }, [timelist2, doctorOptions]);

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
    state.reservationData.department,
  ]);
  useEffect(() => {}, [
    state.reservationData.doctorOptions,
    state.reservationData.datelist,
    state.reservationData.timelist,
    state.reservationData.timelist2,
    state.reservationData.isDisabled,
  ]);

  useEffect(() => {
    if (state.details) {
      navigateMSG();
    }
  }, [state.details]);

  const navigate = useNavigate();

  const navigateMSG = () => {
    try {
      navigate("/reserverstatus");
    } catch (error) {}
  };

  const navigateBack = () => {
    try {
      navigate("/staff");
    } catch (error) {}
  };

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
        <Sidebar />
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
                      <label className="col-md-6">Select Patient</label>
                      <Select
                        placeholder="select a Patient"
                        className="col-md-6"
                        options={patientOptions}
                        onChange={(e) => {
                          dispatch(resetReservationTime());
                          dispatch(updateReservationLists(true));
                          dispatch(addReservationData(["patient", e]));
                        }}
                      />
                    </div>
                    <div className="row mx-1 mb-2">
                      <label className="col-md-6">Select Department</label>
                      <Select
                        key={state.reservationData.patient}
                        placeholder="select a department"
                        className="col-md-6"
                        options={departmentOptions}
                        onChange={(e) => {
                          dispatch(resetReservationTime());
                          dispatch(updateReservationLists(true));
                          dispatch(addReservationData(["department", e]));
                        }}
                      />
                    </div>

                    <div className="row mx-1 mb-2">
                      <label className="col-md-6">Select Doctor</label>
                      <Select
                        key={`${state.reservationData.department}${state.reservationData.patient}`}
                        placeholder="select a doctor"
                        className="col-md-6"
                        options={state.reservationData.doctorOptions}
                        onChange={(e) => {
                          dispatch(resetReservationTime());
                          dispatch(updateReservationLists(true));
                          dispatch(addReservationData(["doctor", e]));
                        }}
                      />
                    </div>

                    <div className="row mx-1 mb-2">
                      <label className="col-md-6">Select Date</label>
                      <Select
                        key={`${state.reservationData.department}${state.reservationData.doctor}${state.reservationData.patient}`}
                        placeholder="select a date"
                        className=" col-md-6"
                        options={state.reservationData.datelist}
                        onChange={(e) => {
                          dispatch(resetReservationTime());
                          dispatch(updateReservationLists(true));
                          dispatch(addReservationData(["date1", e]));
                        }}
                      />
                    </div>
                    <div className="row mx-1 mb-2">
                      <label className="col-md-6">Select time</label>
                      <Select
                        key={`${state.reservationData.department}${state.reservationData.doctor}${state.reservationData.date1}${state.reservationData.patient}`}
                        placeholder="select a time"
                        className="col-md-6"
                        options={state.reservationData.timelist2}
                        onChange={(e) =>
                          dispatch(addReservationData(["time", e]))
                        }
                      />
                    </div>
                    <br />
                    {/* {state.details && navigateMSG()} */}

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
                        {/* <button
                          type="button"
                          className="btn btn-outline-secondary  m-3"
                          // onClick={() => window.history.go(-1)}
                          onClick={() => navigateBack()}
                         
                        >
                          Cancel
                        </button> */}
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

export default Staffindex;
