import React, { useState, useEffect } from 'react';
import { getCurrentUser } from '../services/authService';
import '../assets/css/styles.css';

const LandlordDashboard = () => {
  const [user, setUser] = useState(null);
  const [properties] = useState([
    {
      id: 1,
      title: "Modern Apartment",
      price: "15000",
      status: "Available",
      location: "Dhanmondi",
      description: "2 bedroom apartment with modern amenities",
      image: "property1.jpg"
    },
    {
      id: 2,
      title: "Studio Apartment",
      price: "12000",
      status: "Rented",
      location: "Mohammadpur",
      description: "Cozy studio near bus stand",
      image: "property2.jpg"
    },
    {
      id: 3,
      title: "Family House",
      price: "18000",
      status: "Available",
      location: "Mirpur",
      description: "Spacious house with parking",
      image: "property3.jpg"
    }
  ]);

  useEffect(() => {
    const userData = getCurrentUser();
    setUser(userData);
  }, []);

  const handleEditProfile = () => {
    console.log("Edit profile clicked");
  };

  const handleAddProperty = () => {
    console.log("Add property clicked");
  };

  const handleEditProperty = (propertyId) => {
    console.log("Edit property clicked:", propertyId);
  };

  return (
    <main className="container">
      <header className="dashboard-header">
        <h1>Landlord Dashboard</h1>
        <p>Welcome, {user?.firstName} {user?.lastName}</p>
      </header>
      <section className="profile-section">
        <div className="profile-info">
          <img src="/profile-placeholder.jpg" alt="Profile" />
          <div>
            <p><strong>Name:</strong> {user?.firstName} {user?.lastName}</p>
            <p><strong>Email:</strong> {user?.email}</p>
            <p><strong>Phone:</strong> {user?.phone || '+880 XXXXXXXXX'}</p>
            <p><strong>Properties Listed:</strong> {properties.length}</p>
          </div>
        </div>
        <button className="primary-button" onClick={handleEditProfile}>
          Edit Profile
        </button>
      </section>

      <section className="landlord-properties">
        <div className="section-header">
          <h2>My Properties</h2>
          <button className="primary-button" onClick={handleAddProperty}>
            Add New Property
          </button>
        </div>
        
        {properties.map(property => (
          <div key={property.id} className="property-card">
            <img src={property.image} alt={property.title} />
            <div className="details">
              <p><strong>Title:</strong> {property.title}</p>
              <p><strong>Price:</strong> BDT {property.price}/month</p>
              <p><strong>Location:</strong> {property.location}</p>
              <p><strong>Status:</strong> <span className={`status ${property.status.toLowerCase()}`}>{property.status}</span></p>
              <p>{property.description}</p>
            </div>
            <div className="property-actions">
              <button 
                className="primary-button"
                onClick={() => handleEditProperty(property.id)}
              >
                Edit Property
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default LandlordDashboard;