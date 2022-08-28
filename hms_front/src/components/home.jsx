import React, { useEffect } from "react";

import Banner from "./Banner";
import Departments from "./Departments/Departments";
import Doctors from "./Doctors";
import Statisc from "./Statisc/Statisc";
import WeSummary from "./Summary/WeSummary";
import { checkAuthenticated, load_user } from "./../store/usersSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthenticated());
    dispatch(load_user());
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
