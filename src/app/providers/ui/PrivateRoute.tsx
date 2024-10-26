import { Navigate, Outlet, useLocation } from "react-router-dom";
import { RoutePath } from "../config/routeConfig";

const PrivateRoute = () => {
  const auth = localStorage.getItem("token");
  const location = useLocation();

  if (!auth) {
    return <Navigate to={RoutePath.login} state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
