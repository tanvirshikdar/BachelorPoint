// Import the configured Axios instance for API requests
import api from '../utils/api';

// Login Function
export const login = async (email, password) => {
  try {
    // Send POST request to login endpoint with email and password
    const response = await api.post('/auth/login', { email, password });
    
    // Extract token and user from the response data
    const { token, user } = response.data;
    
    // Store user data and token
    localStorage.setItem('token', token);
    localStorage.setItem('userRole', user.role);
    localStorage.setItem('userData', JSON.stringify(user));
    
    // Return the response data (which may include user information or token)
    return response.data;
  } catch (error) {
    // Handle error, log it, and rethrow it for handling in the component
    console.error('Error logging in:', error.response?.data || error.message);
    throw error;
  }
};

// Register Function
export const register = async (userData) => {
  try {
    // Send POST request to register endpoint with user data
    const response = await api.post('/auth/register', userData);
    
    // Return the response data (which may include user information or token)
    return response.data;
  } catch (error) {
    // Handle error, log it, and rethrow it for handling in the component
    console.error('Error registering:', error.response?.data || error.message);
    throw error;
  }
};

// Logout Function
export const logout = () => {
  // Remove token, user role, and user data from localStorage
  localStorage.removeItem('token');
  localStorage.removeItem('userRole');
  localStorage.removeItem('userData');
};

// Get Current User Function
export const getCurrentUser = () => {
  // Get token, user role, and user data from localStorage
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('userRole');
  const userData = JSON.parse(localStorage.getItem('userData'));
  
  // Return the current user data if token exists, otherwise return null
  if (token && userRole && userData) {
    return { token, userRole, ...userData };
  }
  return null;
};

// Check if user is authenticated
export const isAuthenticated = () => {
  return getCurrentUser() !== null;
};

// Get user role
export const getUserRole = () => {
  return localStorage.getItem('userRole');
};

// Check if user has specific role
export const hasRole = (requiredRole) => {
  const userRole = getUserRole();
  return userRole === requiredRole;
};