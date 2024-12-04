import React, { useState, useEffect } from 'react'; // React library and hooks
import { Link } from 'react-router-dom';            // Link component from react-router-dom for navigation

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

  /**
   * useEffect hook runs on component mount to check if the user is authenticated.
   * It checks for a JWT token in localStorage and updates the `isAuthenticated` state accordingly.
   */
  useEffect(() => {
    const token = localStorage.getItem('token'); // Check if token exists in localStorage
    setIsAuthenticated(!!token); // If token exists, set isAuthenticated to true
  }, []);

  /**
   * handleLogout function that logs out the user by:
   * - Removing the JWT token from localStorage.
   * - Updating the `isAuthenticated` state to false.
   */
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token to log out
    setIsAuthenticated(false); // Update the state to reflect the logout
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {/* Navigation links */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/properties">Properties</Link></li>
        <li><Link to="/roommate-matching">Roommate Matching</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>

        {/* Conditionally render Login/Register or Logout based on authentication status */}
        {!isAuthenticated ? (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        ) : (
          <li><button onClick={handleLogout}>Logout</button></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;