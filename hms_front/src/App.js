import "./App.css";

import React, { useEffect } from "react";
import { Route, Routes, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import About from "./components/About/About";
import AllDepartmentsPage from "./components/Departments/AllDepartmentsPage";
import AllDoctors from "./components/Doctors/AllDoctors";
import BottomFooter from "./components/bottomFooter";
import Contact from "./components/Contact/Contact";
import DepartmentPage from "./components/Departments/DepartmentPage";
import Doctors from "./components/Doctors";
import Home from "./components/home";
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
import ScrollToTop from "react-scroll-to-top";
import { getDepartments } from "./store/Departments";
import { getDoctors } from "./store/Doctors";
import { getPatientDetails, getPatients } from "./store/patient";
import Page404 from "./components/Page404";
// Khalid import
import Signup from "./components/Registration/Signup";
import Activate from "./components/Registration/Activate";
import Signin from "./components/Registration/Signin";
import ResetPassword from "./components/Registration/ResetPassword";
import ResetPasswordConfirm from "./components/Registration/ResetPasswordConfirm";
import PrivateRoutes from "./store/PrivateRoutes";
import Layout from "./components/Registration/Layout";

function App() {
  const dispatch = useDispatch();
  const stateAuth = useSelector((state) => state.authSlice);
  const stateDoctor = useSelector((state) => state.doctorsSlice);
  const statePatient = useSelector((state) => state.patientsSlice);
  const stateDepartment = useSelector((state) => state.departmentsSlice);

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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/departments" element={<AllDepartmentsPage />} />
          <Route path="/departments/:id" element={<DepartmentPage />} />
          <Route path="reserve" element={<Reserve />} />
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
          <Route exact path="/activate/:uid/:token" element={<Activate />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route
            exact
            path="/password/reset/confirm/:uid/:token"
            element={<ResetPasswordConfirm />}
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Layout>
      <BottomFooter />
      <ScrollToTop smooth />
    </div>
  );
}

export default App;
