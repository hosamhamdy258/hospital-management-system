import React, { useEffect } from "react";

import Banner from "./Banner";
import Contact from "./Contact";
import Departments from "./Departments/Departments";
import Doctors from "./Doctors";
import Statisc from "./Statisc/Statisc";
import WeSummary from "./Summary/WeSummary";
import { checkAuthenticated, load_user } from "./../store/usersSlice";
import { useSelector } from "react-redux";

const Home = () => {
  const profileState = useSelector((state) => state.profileSlice);
  if (profileState.data.profile_complete) {
    window.location.reload(false);
  }

  useEffect(() => {
    checkAuthenticated();
    load_user();
  }, []);
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
