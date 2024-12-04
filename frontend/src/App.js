import React from "react"; // React library to define components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // React Router components for routing
import Home from "./pages/Home"; // Home page component
import Properties from "./pages/Properties"; // Properties page component
import RoommateMatching from "./pages/RoommateMatching"; // Roommate Matching page component
import AboutUs from "./pages/AboutUs"; // About Us page component
import ContactUs from "./pages/ContactUs"; // Contact Us page component
import Login from "./pages/Login"; // Login page component
import Register from "./pages/Register"; // Register page component
import BachelorDashboard from "./pages/BachelorDashboard"; // Bachelor Dashboard page component
import LandlordDashboard from "./pages/LandlordDashboard"; // Landlord Dashboard page component
import AdminDashboard from "./pages/AdminDashboard"; // Admin Dashboard page component
import PrivateRoute from "./pages/PrivateRoute"; // Private Route component for protected routes
import Navbar from "./components/Navbar"; // Navbar component
import Header from "./components/Header"; // Header component
import Footer from "./components/Footer"; // Footer component
import "./assets/css/styles.css"; // Import global styles for the app

/**
 * Main App component that sets up routing for the application.
 * Includes both public and protected routes with role-based access control.
 * 
 * @returns {JSX.Element} The rendered App component with routing
 */
function App() {
  return (
    <Router>
      <div>
        {/* Common Header */}
        <Header />

        {/* Common Navbar */}
        <Navbar />

        {/* Main Routes */}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/properties" element={<Properties />} /> {/* Properties now public */}
          <Route path="/roommate-matching" element={<RoommateMatching />} /> {/* Roommate Matching now public */}

          {/* Protected Routes with Role-Based Access */}
          <Route
            path="/bachelor-dashboard"
            element={
              <PrivateRoute role="bachelor">
                <BachelorDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/landlord-dashboard"
            element={
              <PrivateRoute role="landlord">
                <LandlordDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-dashboard"
            element={
              <PrivateRoute role="admin">
                <AdminDashboard />
              </PrivateRoute>
            }
          />
        </Routes>

        {/* Common Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;