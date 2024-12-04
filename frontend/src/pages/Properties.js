import React from 'react';
import '../assets/css/styles.css';

import property1 from '../assets/images/property1.jpg';
import property2 from '../assets/images/property2.jpg';
import property3 from '../assets/images/property3.jpg';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-item">
      <img 
        src={property.image} 
        alt={property.title} 
        className="property-image"
      />
      <div className="property-info">
        <h3 className="property-title">{property.title}</h3>
        <p className="property-location">Location: {property.location}</p>
        <div className="property-details">
          <p className="property-detail-item">Bedrooms: {property.bedrooms}</p>
          <p className="property-detail-item">Bathrooms: {property.bathrooms}</p>
          <p className="property-detail-item">Area: {property.area} sqft</p>
        </div>
        <div className="property-price">৳ {property.price.toLocaleString()}</div>
        <div className="property-buttons">
          <button className="email-button">Email</button>
          <button className="call-button">Call</button>
        </div>
      </div>
    </div>
  );
};

const Properties = () => {
  const properties = [
    {
      id: 1,
      title: "An Exemplary Flat For You Near NCC Bank Limited",
      location: "Block B, Bashundhara R-A",
      bedrooms: 3,
      bathrooms: 3,
      area: 2290,
      price: 22500000,
      image: property1  // Updated to use imported image
    },
    {
      id: 2,
      title: "Beautiful Apartment of 1695 SQ FT Located in Block F",
      location: "Block F, Bashundhara R-A",
      bedrooms: 3,
      bathrooms: 3,
      area: 1695,
      price: 13500000,
      image: property2  // Updated to use imported image
    },
    {
      id: 3,
      title: "Spacious Condo with Modern Amenities in Block C",
      location: "Block C, Bashundhara R-A",
      bedrooms: 2,
      bathrooms: 2,
      area: 1500,
      price: 18000000,
      image: property3 // Updated to use imported image
    }
  ];

  return (
    <main>
      <section className="filter-section">
        <div className="filter-container">
          {/* Location filter dropdown */}
          <select id="location" className="filter-input">
            <option value="any">Any Location</option>
            <option value="bashundhara">Bashundhara R-A</option>
            <option value="gulshan">Gulshan</option>
            <option value="banani">Banani</option>
          </select>

          {/* Price range filter input */}
          <input
            type="text"
            id="priceRange"
            placeholder="Price Range (e.g., 10,000-20,000)"
            className="filter-input"
          />

          {/* Bedrooms filter input */}
          <input
            type="number"
            id="bedrooms"
            placeholder="Bedrooms"
            className="filter-input"
          />

          {/* Bathrooms filter input */}
          <input
            type="number"
            id="bathrooms"
            placeholder="Bathrooms"
            className="filter-input"
          />

          {/* Floor area filter input */}
          <input
            type="text"
            id="floorArea"
            placeholder="Floor Area (e.g., 1500 sqft)"
            className="filter-input"
          />

          {/* Button to trigger the filtering process */}
          <button className="filter-button">
            Search
          </button>
        </div>
      </section>

      <section className="property-list">
        {properties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </section>
    </main>
  );
};

export default Properties;