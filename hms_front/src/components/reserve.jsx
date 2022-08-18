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
} from "./../store/reserve";
import Button from "react-bootstrap/Button";
import moment from "moment";

export default function Reserve() {
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
        value: hour.format("H:mm Z"),
        label: hour.format("H:mm"),
      });
      hour = moment({
        hours,
        minute: 30,
      });

      timelist.push({
        value: hour.format("H:mm Z"),
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
    <div>
      <form action="" method="post" onSubmit={handleSubmit}>
        <Select
          placeholder="select a doctor"
          className="w-25 m-auto"
          options={doctorOptions}
          onChange={(e) => dispatch(addReservationData(["doctor", e]))}
        />
        <br />
        <Select
          placeholder="select a patient"
          className="w-25 m-auto"
          options={patientOptions}
          onChange={(e) => dispatch(addReservationData(["patient", e]))}
        />
        <br />

        <Select
          placeholder="select a date"
          className="w-25 m-auto"
          options={state.reservationData.datelist}
          onChange={(e) => dispatch(addReservationData(["date1", e]))}
        />
        <br />
        <Select
          placeholder="select a time"
          className="w-25 m-auto"
          options={state.reservationData.timelist2}
          onChange={(e) => dispatch(addReservationData(["time", e]))}
        />
        <br />
        <Button
          variant="primary"
          type="submit"
          disabled={state.reservationData.isDisabled}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
