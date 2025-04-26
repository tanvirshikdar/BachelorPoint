import React from 'react';
import '../assets/css/styles.css';

// Importing hero image
import heroImage from '../assets/images/hero-image.jpg';

/**
 * Home component that displays the main page of the website.
 * This component focuses on the specific content for the home page,
 * as the Header, Navbar, and Footer are already managed globally in App.js.
 * 
 * @returns {JSX.Element} The rendered Home page with a hero section.
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
    </main>
  );
};

export default Home;