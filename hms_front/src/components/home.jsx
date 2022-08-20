import Banner from "./Banner";
import Contact from "./Contact";
import Departments from "./Departments/Departments";
import Doctors from "./Doctors";
import React, { useEffect } from "react";
import Statisc from "./Statisc/Statisc";
import WeSummary from "./Summary/WeSummary";
import { load_user } from "./../store/usersSlice";
import { useSelector } from "react-redux";

const Home = () => {
  // const { isAuthenticated } = useSelector((state) => state.users);

  // useEffect(() => {
  //   load_user();
  // }, [isAuthenticated]);
  return (
    <>
      <Banner />
      <Doctors />
      <Departments />
      {/* <Contact/> */}
      <WeSummary />
      <Statisc />
    </>
  );
};

export default Home;
