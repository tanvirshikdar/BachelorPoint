import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/css/styles.css';

import heroImage from '../assets/images/hero-image.jpg';
import property1 from '../assets/images/property1.jpg';
import property2 from '../assets/images/property2.jpg';
import property3 from '../assets/images/property3.jpg';

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />

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
          <div className="featured-property-list">
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

      <Footer />
    </div>
  );
};

export default Home;