import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutesDoctor = () => {
  const state = useSelector((state) => state.users);

  return state.isAuthenticated && state.user.is_doctor ? (
    <Outlet />
  ) : (
    <Navigate to="/unauthorized" />
  );
};

export default PrivateRoutesDoctor;
