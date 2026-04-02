import { Navigate } from "react-router-dom";

import { useAuth } from "../context/useContext";

export const ProtectedRoute = ({ children, allowedRole }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/" />;

  // Check if the user has the allowed role
  if (allowedRole && user.role !== allowedRole) return <Navigate to="/" />;

  return children;
};
