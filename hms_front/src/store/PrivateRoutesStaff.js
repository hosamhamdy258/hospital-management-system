import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutesStaff = () => {
  const state = useSelector((state) => state.users);

  return state.isAuthenticated && state.user.is_staff ? <Outlet /> : <Navigate to="/unauthorized" />;
};

export default PrivateRoutesStaff;
