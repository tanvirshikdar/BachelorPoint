import React, { useState, useEffect } from 'react'; // React library and hooks
import { Link, useNavigate } from 'react-router-dom'; // Link component from react-router-dom for navigation
import { logout, getCurrentUser } from '../services/authService'; // Logout and getCurrentUser functions from authService

/**
 * Navbar component that renders the navigation bar for the website.
 * It contains links to various pages such as Home, Properties, Roommate Matching, 
 * About Us, and Contact Us. It also conditionally renders Login/Register or Profile/Logout links
 * based on the user's authentication status and role.
 * 
 * - If the user is logged in (has a valid JWT token in localStorage), "Profile" and "Logout" buttons are displayed.
 * - If the user is not logged in, "Login" and "Register" links are shown.
 * 
 * The "Profile" link directs to different routes based on the user's role.
 * 
 * @returns {JSX.Element} The rendered navbar with navigation links.
 */
const Navbar = () => {
  // State to manage user authentication status and role
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  /**
   * useEffect hook runs on component mount to check if the user is authenticated.
   * It retrieves the current user and updates the `isAuthenticated` and `userRole` states accordingly.
   */
  useEffect(() => {
    const checkAuth = () => {
      const user = getCurrentUser();
      setIsAuthenticated(!!user);
      setUserRole(user?.role || null);
    };

    // Initial authentication check
    checkAuth();

    // Add event listeners for storage and custom auth change events
    window.addEventListener('storage', checkAuth);
    window.addEventListener('authChange', checkAuth);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('storage', checkAuth);
      window.removeEventListener('authChange', checkAuth);
    };
  }, []);

  /**
   * handleLogout function that logs out the user by:
   * - Calling the logout service function to clean up all auth data.
   * - Updating the `isAuthenticated` and `userRole` states.
   * - Navigating to the login page.
   */
  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
    setUserRole(null);
    navigate('/login');
  };

  /**
   * getProfileRoute function determines the profile route based on the user's role.
   * 
   * @returns {string} The route to navigate to for the user's profile/dashboard.
   */
  const getProfileRoute = () => {
    switch (userRole?.toLowerCase()) {
      case 'bachelor':
        return '/bachelor-dashboard';
      case 'landlord':
        return '/landlord-dashboard';
      case 'admin':
        return '/admin-dashboard';
      default:
        return '/profile';
    }
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {/* Navigation links */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/properties">Properties</Link></li>
        <li><Link to="/roommate-matching">Roommate Matching</Link></li>
        
        {/* Conditional rendering based on authentication status */}
        {!isAuthenticated ? (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        ) : (
          <>
            <li><Link to={getProfileRoute()}>Profile</Link></li>
            <li><Link to="#" onClick={handleLogout}>Logout</Link></li>
          </>
        )}

        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;