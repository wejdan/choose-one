import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const user_id = useSelector((store) => store.authedUser);

  return user_id ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
