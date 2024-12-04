// Import Axios library for making HTTP requests
import axios from 'axios';

// Create a new Axios instance with a predefined configuration
const api = axios.create({
  // Set the base URL for the API requests
  baseURL: 'http://localhost:5000/api', // Your backend base URL
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add an interceptor to include the JWT token in the request headers for authenticated requests
api.interceptors.request.use(
  (config) => {
    // Retrieve the JWT token from localStorage
    const token = localStorage.getItem('token');
    
    // If a token exists, attach it to the Authorization header in the request
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // Add token as Bearer token
    }

    // Return the modified request configuration to proceed with the request
    return config;
  },
  // If there is an error in the request configuration, reject the promise with the error
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Export the configured Axios instance to use in other parts of the application
export default api;