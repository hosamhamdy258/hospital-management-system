import "./App.css";

import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import About from "./components/About/About";
import AllDepartmentsPage from "./components/Departments/AllDepartmentsPage";
import AllDoctors from "./components/Doctors/AllDoctors";
import BottomFooter from "./components/bottomFooter";
import Contact from "./components/Contact/Contact";
import DepartmentPage from "./components/Departments/DepartmentPage";
import Doctors from "./components/Doctors";
import Home from "./components/home";
import Login from "./components/login";
import MyNav from './components/MyNav';
import NotFound from "./components/notfound";
import Register from "./components/register";
import Reserve from "./components/reserve";
import ScrollToTop from "react-scroll-to-top";
import TopNav from "./components/topNav";
import { getDepartments } from './store/Departments';
import { getDoctors } from "./store/Doctors";
import { getPatients } from "./store/patient";

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
        <MyNav/>

      {/* <TopNav /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login state={stateAuth} />} />
        <Route path="register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />


        <Route path="/hDepts" element={<AllDepartmentsPage />} />
        <Route path='/hDepts/:id' element={<DepartmentPage />} />

        <Route
          path="reserve"
          element={<Reserve patient={statePatient} doctor={stateDoctor} />}
        />
        <Route path="doctors" element={<AllDoctors state={stateDoctor} />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <BottomFooter />
      <ScrollToTop smooth />

    </div>
  );
}

export default App;
