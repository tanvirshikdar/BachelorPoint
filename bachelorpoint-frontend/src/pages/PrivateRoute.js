import React from "react";                     // React library for defining components
import { Navigate } from "react-router-dom";   // Navigate component from react-router-dom for redirection

/**
 * PrivateRoute component for protecting routes.
 * Redirects unauthenticated users to the login page.
 * 
 * @param {Object} props - Props passed to the component, including `children` (the component to render).
 * @returns {JSX.Element} A rendered component or a Navigate component to redirect.
 */
const PrivateRoute = ({ children }) => {
  // Check if a JWT token exists in localStorage to determine authentication status
  const isAuthenticated = localStorage.getItem("token");

  // If authenticated, render the children components; otherwise, redirect to login
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;