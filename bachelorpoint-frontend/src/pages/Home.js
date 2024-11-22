import React from 'react';
import '../assets/css/styles.css';

import heroImage from '../assets/images/hero-image.jpg';
import property1 from '../assets/images/property1.jpg';
import property2 from '../assets/images/property2.jpg';
import property3 from '../assets/images/property3.jpg';

const Home = () => {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <h1>BachelorPoint</h1>
      </header>

      {/* Navigation */}
      <nav className="navbar">
        <ul className="nav-list">
          <li><a href="/">Home</a></li>
          <li><a href="/properties">Properties</a></li>
          <li><a href="/roommate-matching">Roommate Matching</a></li>
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/contact-us">Contact Us</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section 
        className="hero"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <div className="container">
          <h2>Find Your Perfect Bachelor Rental</h2>
          <p>Search for affordable and flexible rental properties in your preferred location.</p>
          <div className="search-bar">
            <input type="text" placeholder="Enter location..." className="search-input" />
            <button className="search-button">Search</button>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="properties">
        <div className="container">
          <h2 className="section-title">Featured Properties</h2>
          <div className="property-list">
            {/* Property 1 */}
            <div className="property-item">
              <img src={property1} alt="Modern Apartment in Dhaka" className="property-image" />
              <h3>Modern Apartment in Dhaka</h3>
              <p>BDT 15,000/month</p>
              <p>Spacious and modern apartment with easy access to nearby amenities.</p>
              <button className="details-button">View Details</button>
            </div>
            {/* Property 2 */}
            <div className="property-item">
              <img src={property2} alt="Bachelor Flat in Chittagong" className="property-image" />
              <h3>Bachelor Flat in Chittagong</h3>
              <p>BDT 10,000/month</p>
              <p>Ideal for students and bachelors with convenient transportation links.</p>
              <button className="details-button">View Details</button>
            </div>
            {/* Property 3 */}
            <div className="property-item">
              <img src={property3} alt="Cozy Studio in Sylhet" className="property-image" />
              <h3>Cozy Studio in Sylhet</h3>
              <p>BDT 8,000/month</p>
              <p>A cozy studio apartment perfect for a quiet and peaceful stay.</p>
              <button className="details-button">View Details</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 BachelorPoint. All Rights Reserved.</p>
          <div className="social-media">
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="Facebook" className="social-icon" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="social-icon" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" className="social-icon" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;