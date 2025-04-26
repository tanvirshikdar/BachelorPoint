// Import necessary hooks and components
import React from 'react';                     // React library to define components
import { useHistory } from 'react-router-dom'; // useHistory hook from react-router-dom to handle navigation

/**
 * Logout component that allows users to log out of the application.
 * 
 * When the user clicks the "Logout" button:
 * - The JWT token is removed from localStorage, effectively logging out the user.
 * - The user is redirected to the login page.
 * 
 * @returns {JSX.Element} The rendered Logout button.
 */
const Logout = () => {
  // useHistory hook is used to programmatically navigate to different routes
  const history = useHistory();

  /**
   * handleLogout function that handles the logout process:
   * - Removes the JWT token from localStorage to log out the user.
   * - Redirects the user to the login page.
   */
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove JWT token from localStorage to log out
    history.push('/login');           // Redirect user to the login page
  };

  // Return the Logout button, which triggers the handleLogout function on click
  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;