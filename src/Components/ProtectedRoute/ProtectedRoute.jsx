import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  const isDemoMode = localStorage.getItem("isDemoMode") === "true";

  if (!token && !isDemoMode) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;