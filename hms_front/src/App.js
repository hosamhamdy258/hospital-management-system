import "./App.css";
import '@progress/kendo-theme-default/dist/all.css';

import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { getPatientDetails, getPatients } from "./store/patient";
import { useDispatch, useSelector } from "react-redux";

import About from "./components/About/About";
import Activate from "./components/Registration/Activate";
import AllDepartmentsPage from "./components/Departments/AllDepartmentsPage";
import AllDoctors from "./components/Doctors/AllDoctors";
import BottomFooter from "./components/bottomFooter";
import Completedata from "./components/Completedata";
import Contact from "./components/Contact/Contact";
import DepartmentPage from "./components/Departments/DepartmentPage";
import Doctoredit from "./components/DoctorBoard/Doctoredit";
import Doctorhistory from "./components/DoctorBoard/Doctorhistory";
import Doctorindex from "./components/DoctorBoard/Doctorindex";
import Doctorreport from "./components/DoctorBoard/Doctorreport";
import Doctors from "./components/Doctors";
import Home from "./components/home";
import Layout from "./components/Registration/Layout";
import MyNav from "./components/MyNav";
import NotFound from "./components/notfound";
import Page404 from "./components/Page404";
import PatientMedicalRecord from "./components/PatientBoard/PatientMedicalRecord";
import Patientcheckout from "./components/PatientBoard/Patientcheckout";
import Patientedit from "./components/PatientBoard/Patientedit";
import Patienthistory from "./components/PatientBoard/Patienthistory";
import Patientindex from "./components/PatientBoard/Patientindex";
import PrivateRoutes from "./store/PrivateRoutes";
import Profile from "./components/Profile";
import Register from "./components/register";
import Report from "./components/PatientReport/Report";
import ReqActivate from "./components/Registration/ReqActivate";
import Reserve from "./components/reserve";
import ResetPassword from "./components/Registration/ResetPassword";
import ResetPasswordConfirm from "./components/Registration/ResetPasswordConfirm";
import { ScrollToTop } from "react-router-scroll-to-top";
import Signin from "./components/Registration/Signin";
import Signup from "./components/Registration/Signup";
import Staffedit from "./components/StaffBoard/Staffedit";
import Staffhistory from "./components/StaffBoard/Staffhistory";
import Staffindex from "./components/StaffBoard/Staffindex";
import Verified from "./components/Registration/Verified";
import { getDepartments } from "./store/Departments";
import { getDoctors } from "./store/Doctors";

// import ScrollToTop from "react-scroll-to-top";

//done

// Khalid import



function App() {
  const dispatch = useDispatch();
  const stateAuth = useSelector((state) => state.authSlice);
  const stateDoctor = useSelector((state) => state.doctorsSlice);
  const statePatient = useSelector((state) => state.patientsSlice);
  const stateDepartment = useSelector((state) => state.departmentsSlice);
  const stateUser = useSelector((state) => state.users);
  // console.log(stateUser.user.profile_complete);
  //  console.log(statePatient);
  // console.log(stateDoctor);
  //  const dept=(stateDepartment.departments.filter(x => x.id==3));

  //  const allDepts= stateDepartment.de
  useEffect(() => {
    dispatch(getDoctors());
    dispatch(getPatients());
    dispatch(getDepartments());
  }, [dispatch]);

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route element={<PrivateRoutes />}>add PrivateRoutes here</Route>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          {/* <Route path="login" element={<Login state={stateAuth} />} />
        <Route path="register" element={<Register />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/departments" element={<AllDepartmentsPage />} />
          <Route path="/departments/:id" element={<DepartmentPage />} />
          {/* <Route path="reserve" element={<Reserve />} />*/}
          <Route path="doctors" element={<AllDoctors state={stateDoctor} />} />
          <Route
            path="/patient/:id"
            element={<Patientindex doctor={stateDoctor} />}
          />
          <Route path="/patienthistory/:id" element={<Patienthistory />} />
          <Route path="/patientedit/:id" element={<Patientedit />} />
          <Route path="/checkout/:id" element={<Patientcheckout />} />
          <Route path="/doctor/:id" element={<Doctorindex />} />
          <Route path="/doctorreport/:id" element={<Doctorreport />} />
          <Route path="/doctoredit/:id" element={<Doctoredit />} />
          <Route path="/doctorhistory/:id" element={<Doctorhistory />} />
          <Route
            path="/staff/:id"
            element={<Staffindex patient={statePatient} doctor={stateDoctor} />}
          />
          <Route path="/staffhistory/:id" element={<Staffhistory />} />
          <Route path="/staffedit/:id" element={<Staffedit />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/patientedit/:id" element={<Patientedit />} />
          <Route path="/staffedit" element={<Staffedit />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reqActivate" element={<ReqActivate />} />
          <Route path="/verified" element={<Verified />} />
          <Route exact path="/activate/:uid/:token" element={<Activate />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route
            exact
            path="/password/reset/confirm/:uid/:token"
            element={<ResetPasswordConfirm />}
          />
          {!stateUser.user.profile_complete ? (
            <Route path="/completedata" element={<Completedata />} />
          ) : null}
          <Route path="/medicalRecord/:id" element={<PatientMedicalRecord />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <BottomFooter />
        <ScrollToTop smooth />
      </Layout>
   
    </div>
  );
}

export default App;
