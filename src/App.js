import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Route, Routes } from "react-router-dom"

import AllDepartmentsPage from './components/Departments/AllDepartmentsPage';
import Appoinment from './components/Appoinments/Appoinment';
import Banner from './components/Banner';
import Contact from './components/Contact';
import DoctorPage from './components/Doctors/DoctorPage';
import Footer from './components/Footer/Footer'
import Home from './components/Home'
import Login from './components/Mo/Login';
import MyNav from './components/MyNav';
import ScrollToTop from "react-scroll-to-top";
import style from './components/myCss.module.css'

function App() {
  return (
    <div className="App">
     <MyNav/>
     <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="home" element={ <Home/> } />

        {/* <Route path="doctor" element={ <DoctorPage/> } /> */}
        <Route path='/doctor/:id' element={<DoctorPage />} />
        <Route path="appoinment" element={ <Appoinment/> } />
        <Route path="hDepts" element={ <AllDepartmentsPage/> } />
        <Route path="login" element={ <Login/> } />



        {/* <Route path="contact" element={ <Contact/> } /> */}
      </Routes>
        <Footer/>
        <ScrollToTop smooth fill='white'
  />
    </div>
  );
}

export default App;
