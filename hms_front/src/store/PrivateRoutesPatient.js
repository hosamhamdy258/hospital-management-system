import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutesPatient = () => {
  const state = useSelector((state) => state.users);

  return state.isAuthenticated &&
    !state.user.is_doctor &&
    !state.user.is_emp &&
    !state.user.is_staff ? (
    <Outlet />
  ) : (
    <Navigate to="/unauthorized" />
  );
};

export default PrivateRoutesPatient;
