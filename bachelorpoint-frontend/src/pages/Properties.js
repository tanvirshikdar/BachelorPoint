import React, { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/css/styles.css";

const Properties = () => {
  const [filters, setFilters] = useState({
    location: "any",
    priceRange: "",
    bedrooms: "",
    bathrooms: "",
    floorArea: "",
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
      <Header />
      <Navbar />

      <section className="filter-section">
        <div className="filter-container">
          <select id="location" onChange={handleFilterChange} className="filter-input">
            <option value="any">Any Location</option>
            <option value="bashundhara">Bashundhara R-A</option>
            <option value="gulshan">Gulshan</option>
            <option value="banani">Banani</option>
          </select>

          <input
            type="text"
            id="priceRange"
            placeholder="Price Range (e.g., 10,000-20,000)"
            onChange={handleFilterChange}
            className="filter-input"
          />

          <input
            type="number"
            id="bedrooms"
            placeholder="Bedrooms"
            onChange={handleFilterChange}
            className="filter-input"
          />

          <input
            type="number"
            id="bathrooms"
            placeholder="Bathrooms"
            onChange={handleFilterChange}
            className="filter-input"
          />

          <input
            type="text"
            id="floorArea"
            placeholder="Floor Area (e.g., 1500 sqft)"
            onChange={handleFilterChange}
            className="filter-input"
          />

          <button onClick={filterProperties} className="filter-button">
            Search
          </button>
        </div>
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

      <Footer />
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