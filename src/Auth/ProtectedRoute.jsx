import React from "react";
import { Navigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

const ProtectedRoute = ({ element: Component, roles }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  try {
    const decodedToken = jwtDecode(token);
    const userRole = decodedToken.role;

    if (roles.includes(userRole)) {
      return <Component />;
    } else {
      return <Navigate to="/unauthorized" />;
    }
  } catch (error) {
    console.error("Token decoding error:", error);
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
