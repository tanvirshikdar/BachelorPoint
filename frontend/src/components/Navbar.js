import React, { useState, useEffect } from 'react'; // React library and hooks
import { Link, useNavigate } from 'react-router-dom';            // Link component from react-router-dom for navigation
import { logout } from '../services/authService'; // Logout function from authService

/**
 * Navbar component that renders the navigation bar for the website.
 * It contains links to various pages such as Home, Properties, Roommate Matching, 
 * About Us, and Contact Us. It also conditionally renders Login/Logout and Register links
 * based on the user's authentication status.
 * 
 * - If the user is logged in (has a valid JWT token in localStorage), a "Logout" button is displayed.
 * - If the user is not logged in, "Login" and "Register" links are shown.
 * 
 * @returns {JSX.Element} The rendered navbar with navigation links.
 */
const Navbar = () => {
  // State to manage user authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  /**
   * useEffect hook runs on component mount to check if the user is authenticated.
   * It checks for a JWT token in localStorage and updates the `isAuthenticated` state accordingly.
   */
  
  useEffect(() => {
    // Check authentication status whenever localStorage changes
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      setIsAuthenticated(!!token);
    };

    // Initial check
    checkAuth();

    // Add event listener for storage changes
    window.addEventListener('storage', checkAuth);
    // Also listen for custom auth change events
    window.addEventListener('authChange', checkAuth);

    // Cleanup
    return () => {
      window.removeEventListener('storage', checkAuth);
      window.removeEventListener('authChange', checkAuth);
    };
  }, []);

  /**
   * handleLogout function that logs out the user by:
   * - Calling the logout service function to clean up all auth data.
   * - Updating the `isAuthenticated` state to false.
   * - Navigating to the login page.
   */
  const handleLogout = () => {
    // Call the logout service function to clean up all auth data
    logout();
    // Update local state
    setIsAuthenticated(false);
    // Navigate to login page
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {/* Navigation links */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/properties">Properties</Link></li>
        <li><Link to="/roommate-matching">Roommate Matching</Link></li>
        {!isAuthenticated ? (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        ) : (
          <li><button onClick={handleLogout}>Logout</button></li>
        )}
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;