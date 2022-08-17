import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDoctors } from "./../store/Doctors";

export default function Doctors() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.doctorsSlice);

  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);

  return (
    <div>
      Doctors
      {state.doctors.map(function (item) {
        return <li key={item.id}>{item.full_name}</li>;
      })}
    </div>
  );
}
