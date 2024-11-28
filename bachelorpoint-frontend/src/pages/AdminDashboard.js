import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalProperties: 0,
    pendingApprovals: 0,
    reportedIssues: 0
  });
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

        if (response.data.role !== 'admin') {
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
    <div className="admin-dashboard">
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <p>Welcome, {userData?.name}</p>
      </header>

      <main className="dashboard-content">
        <section className="stats-section">
          <h2>System Overview</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>Total Users</h3>
              <p className="stat-number">{stats.totalUsers}</p>
              <div className="stat-breakdown">
                <span>Bachelors: 0</span>
                <span>Landlords: 0</span>
              </div>
            </div>
            <div className="stat-card">
              <h3>Total Properties</h3>
              <p className="stat-number">{stats.totalProperties}</p>
              <div className="stat-breakdown">
                <span>Active: 0</span>
                <span>Pending: 0</span>
              </div>
            </div>
            <div className="stat-card">
              <h3>Pending Approvals</h3>
              <p className="stat-number">{stats.pendingApprovals}</p>
              <button className="action-btn small">Review</button>
            </div>
            <div className="stat-card">
              <h3>Reported Issues</h3>
              <p className="stat-number">{stats.reportedIssues}</p>
              <button className="action-btn small">View All</button>
            </div>
          </div>
        </section>

        <section className="actions-section">
          <h2>Administrative Actions</h2>
          <div className="action-buttons">
            <button className="action-btn">Manage Users</button>
            <button className="action-btn">Property Approvals</button>
            <button className="action-btn">System Settings</button>
            <button className="action-btn">View Reports</button>
          </div>
        </section>

        <section className="recent-activity">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            <p>No recent activity to display</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;