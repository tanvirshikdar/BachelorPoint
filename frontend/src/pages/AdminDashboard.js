import React, { useState, useEffect } from 'react';
import { getCurrentUser } from '../services/authService';
import '../assets/css/styles.css';

const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const [stats] = useState({
    totalUsers: 25,
    totalProperties: 15,
    pendingApprovals: 3,
    reportedIssues: 2,
    bachelors: 18,
    landlords: 7,
    activeProperties: 12,
    pendingProperties: 3
  });

  useEffect(() => {
    const userData = getCurrentUser();
    setUser(userData);
  }, []);

  return (
    <div className="container">
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <p>Welcome, {user?.firstName} {user?.lastName}</p>
      </header>

      <main className="dashboard-content">
        <section className="stats-section">
          <h2>System Overview</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>Total Users</h3>
              <p className="stat-number">{stats.totalUsers}</p>
              <div className="stat-breakdown">
                <span>Bachelors: {stats.bachelors}</span>
                <span>Landlords: {stats.landlords}</span>
              </div>
            </div>
            <div className="stat-card">
              <h3>Total Properties</h3>
              <p className="stat-number">{stats.totalProperties}</p>
              <div className="stat-breakdown">
                <span>Active: {stats.activeProperties}</span>
                <span>Pending: {stats.pendingProperties}</span>
              </div>
            </div>
            <div className="stat-card">
              <h3>Pending Approvals</h3>
              <p className="stat-number">{stats.pendingApprovals}</p>
              <button className="primary-button">Review</button>
            </div>
            <div className="stat-card">
              <h3>Reported Issues</h3>
              <p className="stat-number">{stats.reportedIssues}</p>
              <button className="primary-button">View All</button>
            </div>
          </div>
        </section>

        <section className="actions-section">
          <h2>Administrative Actions</h2>
          <div className="action-buttons">
            <button className="primary-button">Manage Users</button>
            <button className="primary-button">Property Approvals</button>
            <button className="primary-button">System Settings</button>
            <button className="primary-button">View Reports</button>
          </div>
        </section>

        <section className="recent-activity">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            <div className="activity-item">
              <p>New property listing awaiting approval</p>
              <span className="time">2 hours ago</span>
            </div>
            <div className="activity-item">
              <p>New user registration: John Doe (Bachelor)</p>
              <span className="time">5 hours ago</span>
            </div>
            <div className="activity-item">
              <p>Property reported for review: Modern Apartment</p>
              <span className="time">1 day ago</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;