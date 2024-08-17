import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AppContext from "../../contexts/AppContext";

function ProtectedRoute({ children, anonymous = false }) {
  const location = useLocation();
  const from = location.state?.from || "/";
  const { isLoggedIn } = useContext(AppContext);

  if (anonymous && isLoggedIn) {
    console.log("logged-in");
    return <Navigate to={from} />;
  }

  if (!anonymous && !isLoggedIn) {
    console.log("not");
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
}

export default ProtectedRoute;
