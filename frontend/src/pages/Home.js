import React from 'react';
import '../assets/css/styles.css';

// Importing images for hero section and featured properties
import heroImage from '../assets/images/hero-image.jpg';
import property1 from '../assets/images/property1.jpg';
import property2 from '../assets/images/property2.jpg';
import property3 from '../assets/images/property3.jpg';

/**
 * Home component that displays the main page of the website.
 * This component focuses on the specific content for the home page,
 * as the Header, Navbar, and Footer are already managed globally in App.js.
 * 
 * @returns {JSX.Element} The rendered Home page with a hero section and featured properties.
 */
const Home = () => {
  return (
    <main>
      {/* Hero section with background image and search functionality */}
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
          {/* Main heading for the hero section */}
          <h2>Find Your Perfect Bachelor Rental</h2>
          
          {/* Subheading providing more information */}
          <p>Search for affordable and flexible rental properties in your preferred location.</p>
          
          {/* Search bar with input and button for location search */}
          <div className="search-bar">
            <input type="text" placeholder="Enter location..." className="search-input" />
            <button className="search-button">Search</button>
          </div>
        </div>
      </section>

      {/* Featured Properties section */}
      <section className="properties">
        <div className="container">
          {/* Section title for featured properties */}
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
    </main>
  );
};

export default Home;