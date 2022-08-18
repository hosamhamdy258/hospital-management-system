import React, { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

import { Route, Routes } from "react-router-dom";
import TopNav from "./components/topNav";
import NotFound from "./components/notfound";
import BottomFooter from "./components/bottomFooter";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import Doctors from "./components/Doctors";
import Reserve from "./components/reserve";
import { getDoctors } from "./store/Doctors";
import { getPatients } from "./store/patient";

function App() {
  const dispatch = useDispatch();
  const stateAuth = useSelector((state) => state.authSlice);
  const stateDoctor = useSelector((state) => state.doctorsSlice);
  const statePatient = useSelector((state) => state.patientsSlice);
  // console.log(statePatient);
  // console.log(stateDoctor);
  useEffect(() => {
    dispatch(getDoctors());
    dispatch(getPatients());
  }, [dispatch]);

  return (
    <div className="App">
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login state={stateAuth} />} />
        <Route path="register" element={<Register />} />
        <Route path="reserve" element={<Reserve />} />
        <Route path="doctors" element={<Doctors state={stateDoctor} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BottomFooter />
    </div>
  );
}

export default App;
