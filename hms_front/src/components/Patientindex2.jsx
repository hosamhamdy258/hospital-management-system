import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPatientDetails } from "../store/patient";

export default function Patientindex2() {
  const state = useSelector((state) => state.patientsSlice);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPatientDetails(id));
  }, [dispatch, id]);

  return <div>{state.patientDetails.id_number}</div>;
}
