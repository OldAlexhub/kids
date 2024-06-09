import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const name = localStorage.getItem("name");
  const userId = localStorage.getItem("userId");
  const image = localStorage.getItem("image");

  if (!name || !userId || !image) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
