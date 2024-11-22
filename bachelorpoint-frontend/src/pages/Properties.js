import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/styles.css";

const Properties = () => {
  const [filters, setFilters] = useState({
    offerType: "any",
    propertyType: "any",
    location: "any",
    priceRange: "",
  });

  const filterProperties = () => {
    console.log("Filters applied:", filters);
    // Add your filtering logic here (e.g., API call or state update)
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.id]: e.target.value });
  };

  return (
    <div>
      <header className="header">
        <h1 className="logo">BachelorPoint</h1>
      </header>

      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/properties" className="active">Properties</Link></li>
          <li><Link to="/roommate-matching">Roommate Matching</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
      </nav>

      <section className="filter-section">
        <select id="offerType" onChange={handleFilterChange}>
          <option value="any">Any Offer</option>
          <option value="for_sale">For Sale</option>
          <option value="for_rent">For Rent</option>
        </select>
        <select id="propertyType" onChange={handleFilterChange}>
          <option value="any">Any Type</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="studio">Studio</option>
        </select>
        <select id="location" onChange={handleFilterChange}>
          <option value="any">Any Location</option>
          <option value="bashundhara">Bashundhara R-A</option>
          <option value="gulshan">Gulshan</option>
          <option value="banani">Banani</option>
        </select>
        <input
          type="text"
          id="priceRange"
          placeholder="Price Range"
          onChange={handleFilterChange}
        />
        <button onClick={filterProperties}>Search</button>
      </section>

      <section className="property-list">
        {/* Example of Property Cards */}
        <PropertyCard
          imgSrc="../assets/images/property1.jpg"
          title="An Exemplary Flat For You Near NCC Bank Limited"
          location="Block B, Bashundhara R-A"
          bedrooms="3"
          bathrooms="3"
          area="2290 sqft"
          price="৳ 22,500,000"
        />
        <PropertyCard
          imgSrc="../assets/images/property2.jpg"
          title="Beautiful Apartment of 1695 SQ FT Located in Block F"
          location="Block F, Bashundhara R-A"
          bedrooms="3"
          bathrooms="3"
          area="1695 sqft"
          price="৳ 13,500,000"
        />
      </section>

      <footer className="footer">
        <p>&copy; 2024 BachelorPoint. All Rights Reserved.</p>
        <div className="social-icons">
          <a href="#"><img src="../assets/images/facebook-icon.png" alt="Facebook" /></a>
          <a href="#"><img src="../assets/images/twitter-icon.png" alt="Twitter" /></a>
          <a href="#"><img src="../assets/images/instagram-icon.png" alt="Instagram" /></a>
        </div>
      </footer>
    </div>
  );
};

const PropertyCard = ({ imgSrc, title, location, bedrooms, bathrooms, area, price }) => {
  return (
    <div className="property-item">
      <img src={imgSrc} alt="Property" />
      <div className="property-info">
        <h3>{title}</h3>
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Bedrooms:</strong> {bedrooms}</p>
        <p><strong>Bathrooms:</strong> {bathrooms}</p>
        <p><strong>Area:</strong> {area}</p>
        <p className="price">{price}</p>
        <div className="action-buttons">
          <button>Email</button>
          <button>Call</button>
        </div>
      </div>
    </div>
  );
};

export default Properties;