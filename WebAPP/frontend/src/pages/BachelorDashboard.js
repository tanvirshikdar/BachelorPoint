import React, { useState, useEffect } from 'react';
import { getCurrentUser } from '../services/authService';
import '../assets/css/styles.css';

const BachelorDashboard = () => {
  const [user, setUser] = useState(null);
  const [properties] = useState([
    {
      id: 1,
      title: "Property 1",
      price: "15000",
      description: "Modern apartment in Dhanmondi with 2 bedrooms",
      image: "property1.jpg"
    },
    {
      id: 2,
      title: "Property 2",
      price: "12000",
      description: "Cozy flat in Mohammadpur near bus stand",
      image: "property2.jpg"
    },
    {
      id: 3,
      title: "Property 3",
      price: "18000",
      description: "Spacious house in Mirpur with parking",
      image: "property3.jpg"
    }
  ]);

  useEffect(() => {
    const userData = getCurrentUser();
    setUser(userData);
  }, []);

  const handleEditProfile = () => {
    // Implement edit profile functionality
    console.log("Edit profile clicked");
  };

  const handleViewDetails = (propertyId) => {
    // Implement view details functionality
    console.log("View details clicked for property:", propertyId);
  };

  return (
    <main className="container">
      <header className="dashboard-header">
        <h1>Bachelor Dashboard</h1>
        <p>Welcome, {user?.firstName} {user?.lastName}</p>
      </header>
      <section className="profile-section">
        <div className="profile-info">
          <img src="/profile-placeholder.jpg" alt="Profile" />
          <div>
            <p><strong>Name:</strong> {user?.firstName} {user?.lastName}</p>
            <p><strong>Email:</strong> {user?.email}</p>
            <p><strong>Phone:</strong> {user?.phone || '+880 XXXXXXXXX'}</p>
          </div>
        </div>
        <button className="primary-button" onClick={handleEditProfile}>
          Edit Profile
        </button>
      </section>

      <section className="saved-properties">
        <h2>Saved Properties</h2>
        {properties.map(property => (
          <div key={property.id} className="property-card">
            <img src={property.image} alt={property.title} />
            <div className="details">
              <p><strong>Title:</strong> {property.title}</p>
              <p><strong>Price:</strong> BDT {property.price}/month</p>
              <p>{property.description}</p>
            </div>
            <button 
              className="primary-button"
              onClick={() => handleViewDetails(property.id)}
            >
              Details
            </button>
          </div>
        ))}
      </section>
    </main>
  );
};

export default BachelorDashboard;