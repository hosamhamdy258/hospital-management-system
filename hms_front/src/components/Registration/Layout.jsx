import React, { useEffect } from "react";
import { connect } from "react-redux";
import { checkAuthenticated, load_user } from "../../store/usersSlice";
import MyNav from "../MyNav";

const Layout = ({ checkAuthenticated, load_user, children }) => {
  useEffect(() => {
    checkAuthenticated();
    load_user();
  }, []);

  return (
    <div>
      <MyNav />
      {children}
    </div>
  );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);
