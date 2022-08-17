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
// Attia components import
import Patientindex from "./components/Patientindex";
import Patienthistory from "./components/Patienthistory";
import Patientcheckout from "./components/Patientcheckout";
import Doctorindex from "./components/Doctorindex";
import Doctorreport from "./components/Doctorreport";
import Staffindex from "./components/Staffindex";
import Staffhistory from "./components/Staffhistory";
import Profile from "./components/Profile";
import Patientedit from "./components/Patientedit";
import Staffedit from "./components/Staffedit";

//done
import Reserve from "./components/reserve";
import { getDoctors } from "./store/Doctors";
import { getPatients } from "./store/patient";

function App() {
  const dispatch = useDispatch();
  const stateAuth = useSelector((state) => state.authSlice);
  const stateDoctor = useSelector((state) => state.doctorsSlice);
  const statePatient = useSelector((state) => state.patientsSlice);
  console.log(statePatient);
  console.log(stateDoctor);
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
        <Route
          path="reserve"
          element={<Reserve patient={statePatient} doctor={stateDoctor} />}
        />
        <Route path="doctors" element={<Doctors state={stateDoctor} />} />
        <Route path="*" element={<NotFound />} />
        {/* attia links */}
        <Route path="/patient" element={<Patientindex />} />
        <Route path="/patienthistory" element={<Patienthistory />} />
        <Route path="/checkout" element={<Patientcheckout />} />
        <Route path="/doctor" element={<Doctorindex />} />
        <Route path="/doctorreport" element={<Doctorreport />} />
        <Route path="/staff" element={<Staffindex />} />
        <Route path="/staffhistory" element={<Staffhistory />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/patientedit" element={<Patientedit />} />
        <Route path="/staffedit" element={<Staffedit />} />
      </Routes>
      <BottomFooter />
      <Routes></Routes>
    </div>
  );
}

export default App;