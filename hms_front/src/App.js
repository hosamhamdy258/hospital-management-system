import "./App.css";
import "@progress/kendo-theme-default/dist/all.css";

import React, { useEffect } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import About from "./components/About/About";
import Activate from "./components/Registration/Activate";
import AllDepartmentsPage from "./components/Departments/AllDepartmentsPage";
import AllDoctors from "./components/Doctors/AllDoctors";
import BottomFooter from "./components/bottomFooter";

import Contact from "./components/Contact/Contact";
import DepartmentPage from "./components/Departments/DepartmentPage";
import Doctoredit from "./components/DoctorBoard/Doctoredit";
import Doctorhistory from "./components/DoctorBoard/Doctorhistory";
import Doctorindex from "./components/DoctorBoard/Doctorindex";
import Doctorreport from "./components/DoctorBoard/Doctorreport";
import Home from "./components/home";
import Layout from "./components/Registration/Layout";
import Page404 from "./components/Page404";
import PatientMedicalRecord from "./components/PatientBoard/PatientMedicalRecord";
import Patientedit from "./components/PatientBoard/Patientedit";
import Patienthistory from "./components/PatientBoard/Patienthistory";
import Patientindex from "./components/PatientBoard/Patientindex";
import PrivateRoutes from "./store/PrivateRoutes";
import Profile from "./components/Profile";
import ReportStatus from "./components/DoctorBoard/ReportReply";
import ReqActivate from "./components/Registration/ReqActivate";
import ReserveReply from "./components/PatientBoard/ReserveReply";
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
import Completedata from "./components/Completedata";

import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const theme = {
  height: "100px",
  background: "#e9f6f7",
  headerBgColor: "#299ADC",
  headerFontSize: "20px",
  botBubbleColor: "#0F3789",
  headerFontColor: "white",
  botFontColor: "white",
  userBubbleColor: "#FF5733",
  userFontColor: "white",
};
const config = {
  height: "450px",
  floating: true,
  botAvatar: "avatar2.jpg",
};

const steps = [
  {
    id: "0",
    message: "Welcome to HOPE !",
    trigger: "1",
  },
  {
    id: "1",

    // This message appears in
    // the bot chat bubble
    message: "Please enter your name",
    trigger: "2",
  },
  {
    id: "2",
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message: " hi {previousValue}, how can I help you?",
    trigger: 4,
  },
  {
    id: "4",
    options: [
      { value: 1, label: "About Us", trigger: 5 },
      //     { value: 2, label: 'Book an appointment',trigger:6 },
      //     { value: 3, label: 'Contact Us' ,trigger:5},
      //     { value: 4, label: 'create an account',trigger:6 },
      //     { value: 4, label: 'having a problem logging in ?',trigger:6 },
      //
    ],
  },
  {
    id: "5",
    message:
      " HOPE is a Hospital Management System graduation project created by ITIans ",
    trigger: 6,
  },
  {
    id: "6",

    options: [
      {
        value: 1,
        label: "Read more about us",
        component: (
          <NavLink className="nav_login_button" to="/about">
            Read more
          </NavLink>
        ),
      },
      { value: 2, label: "Back To main menu", trigger: 4 },
    ],
  },
];

function App() {
  const dispatch = useDispatch();
  const stateDoctor = useSelector((state) => state.doctorsSlice);
  const statePatient = useSelector((state) => state.patientsSlice);
  const stateUser = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getDoctors());
    dispatch(getDepartments());
  }, [dispatch]);

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route
              path="/patient/"
              element={<Patientindex doctor={stateDoctor} />}
            />
            <Route path="/patienthistory/" element={<Patienthistory />} />
            <Route path="/patientedit/" element={<Patientedit />} />
            {/* <Route path="/checkout/" element={<Patientcheckout />} /> */}
            <Route path="/reserverstatus/" element={<ReserveReply />} />

            <Route path="/doctor/" element={<Doctorindex />} />
            <Route path="/doctorreport/" element={<Doctorreport />} />
            <Route path="/doctoredit/" element={<Doctoredit />} />
            <Route path="/doctorhistory/" element={<Doctorhistory />} />
            <Route path="/reportstatus/" element={<ReportStatus />} />

            <Route
              path="/staff/"
              element={
                <Staffindex patient={statePatient} doctor={stateDoctor} />
              }
            />
            <Route path="/staffhistory/" element={<Staffhistory />} />
            <Route path="/staffedit/" element={<Staffedit />} />
            {!stateUser.user.profile_complete ? (
              <Route path="/completedata" element={<Completedata />} />
            ) : null}
            <Route path="/medicalRecord" element={<PatientMedicalRecord />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/departments" element={<AllDepartmentsPage />} />
          <Route path="/departments/:id" element={<DepartmentPage />} />
          <Route path="doctors" element={<AllDoctors state={stateDoctor} />} />

          <Route path="/profile" element={<Profile />} />
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

          <Route path="*" element={<Page404 />} />
        </Routes>
        <BottomFooter />
        <ScrollToTop smooth />
        <ThemeProvider theme={theme}>
          <ChatBot steps={steps} {...config} />
        </ThemeProvider>
      </Layout>
    </div>
  );
}

export default App;
