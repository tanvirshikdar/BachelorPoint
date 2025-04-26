import React from "react";                     // React library for defining components
import { Navigate, useLocation } from "react-router-dom";   // Navigate component from react-router-dom for redirection
import { getCurrentUser } from "../services/authService"; // getCurrentUser function from authService

/**
 * PrivateRoute component for protecting routes with role-based access control.
 * Redirects unauthenticated users to login and unauthorized users to home.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The component to render if authorized
 * @param {(string|string[])} props.role - Single role or array of roles allowed to access this route
 * @returns {JSX.Element} A rendered component or Navigate component for redirection
 */
const PrivateRoute = ({ children, role }) => {
  const location = useLocation();
  const currentUser = getCurrentUser();
  
  // If not authenticated, redirect to login with return path
  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  // Convert role prop to array for consistent handling
  const allowedRoles = Array.isArray(role) ? role : [role];

  // Check if user has required role
  if (role && !allowedRoles.includes(currentUser.userRole?.toLowerCase())) {
    // Redirect to home page if user doesn't have required role
    return <Navigate to="/" replace />;
  }

  // Authorized - render children
  return children;
};

export default PrivateRoute;