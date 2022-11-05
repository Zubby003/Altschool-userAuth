import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./Auth";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { values } = useAuth();

  if (!values.user && !values.email) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return children;
};

export default ProtectedRoute;
