import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LandlordDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
          return;
        }

        const response = await axios.get('/api/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.data.role !== 'landlord') {
          navigate('/');
          return;
        }

        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        navigate('/login');
      }
    };

    fetchUserData();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="landlord-dashboard">
      <header className="dashboard-header">
        <h1>Welcome, {userData?.name}</h1>
        <p>Landlord Dashboard</p>
      </header>

      <main className="dashboard-content">
        <section className="profile-section">
          <h2>Your Profile</h2>
          <div className="profile-info">
            <p><strong>Name:</strong> {userData?.name}</p>
            <p><strong>Email:</strong> {userData?.email}</p>
            <p><strong>Phone:</strong> {userData?.phone}</p>
          </div>
        </section>

        <section className="properties-section">
          <h2>Your Properties</h2>
          <div className="property-actions">
            <button className="action-btn primary">Add New Property</button>
            <button className="action-btn">View All Properties</button>
          </div>
          
          <div className="property-stats">
            <div className="stat-card">
              <h3>Total Properties</h3>
              <p className="stat-number">{properties.length}</p>
            </div>
            <div className="stat-card">
              <h3>Available Units</h3>
              <p className="stat-number">0</p>
            </div>
            <div className="stat-card">
              <h3>Occupied Units</h3>
              <p className="stat-number">0</p>
            </div>
          </div>
        </section>

        <section className="actions-section">
          <h2>Quick Actions</h2>
          <div className="action-buttons">
            <button className="action-btn">Manage Listings</button>
            <button className="action-btn">View Inquiries</button>
            <button className="action-btn">Messages</button>
            <button className="action-btn">Edit Profile</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandlordDashboard;