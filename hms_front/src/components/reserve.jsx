import React, { Fragment, useEffect, useRef } from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { getPatientDoctors } from "./../store/reserve";

export default function Reserve({ doctor, patient }) {
  // console.log(doctor.doctors[0].first_name);
  // // console.log(patient);
  // console.log(patient);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPatientDoctors());
  }, [dispatch]);

  const doctorOptions = doctor.doctors.map(function (item) {
    return { value: item.id, label: item.full_name };
  });
  const patientOptions = patient.patients.map(function (item) {
    return { value: item.id, label: item.full_name };
  });
  console.log(doctorOptions);
  console.log(patientOptions);
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

  return (
    <div>
      <form action="" method="post" onSubmit={handleSubmit}>
        <Select
          className="w-25 m-auto"
          options={doctorOptions}
          name="doctor"
          onChange={(e) => onChange(e, "doctor")}
        />
        <Select
          className="w-25 m-auto"
          options={patientOptions}
          name="patient"
          onChange={(e) => onChange(e, "patient")}
        />

        <input type="submit" />
      </form>
    </div>
  );
}
