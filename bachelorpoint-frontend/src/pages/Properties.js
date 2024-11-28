import React, { useState } from "react";
import "../assets/css/styles.css";

// Importing images for property cards
import property1 from "../assets/images/property1.jpg";
import property2 from "../assets/images/property2.jpg";

/**
 * Properties component that displays a list of properties with filtering options.
 * The global layout (Header, Navbar, Footer) is managed in App.js.
 * 
 * @returns {JSX.Element} The rendered Properties page with filter options and property list.
 */
const Properties = () => {
  // State to store the selected filter criteria
  const [filters, setFilters] = useState({
    location: "any",
    priceRange: "",
    bedrooms: "",
    bathrooms: "",
    floorArea: "",
  });

  /**
   * Function to handle filtering of properties based on the selected filters.
   * Currently logs the filter values. Can be extended to implement actual filtering logic.
   */
  const filterProperties = () => {
    console.log("Filters applied:", filters);
    // Add your filtering logic here (e.g., API call or state update)
  };

  /**
   * Handler function to update the filter state when a filter value changes.
   * 
   * @param {Object} e - The event object from the filter input change.
   */
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.id]: e.target.value });
  };

  return (
    <main>
      {/* Filter section allowing users to filter properties based on different criteria */}
      <section className="filter-section">
        <div className="filter-container">
          {/* Location filter dropdown */}
          <select id="location" onChange={handleFilterChange} className="filter-input">
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
            onChange={handleFilterChange}
            className="filter-input"
          />

          {/* Bedrooms filter input */}
          <input
            type="number"
            id="bedrooms"
            placeholder="Bedrooms"
            onChange={handleFilterChange}
            className="filter-input"
          />

          {/* Bathrooms filter input */}
          <input
            type="number"
            id="bathrooms"
            placeholder="Bathrooms"
            onChange={handleFilterChange}
            className="filter-input"
          />

          {/* Floor area filter input */}
          <input
            type="text"
            id="floorArea"
            placeholder="Floor Area (e.g., 1500 sqft)"
            onChange={handleFilterChange}
            className="filter-input"
          />

          {/* Button to trigger the filtering process */}
          <button onClick={filterProperties} className="filter-button">
            Search
          </button>
        </div>
      </section>

      {/* Section to display a list of properties */}
      <section className="property-list">
        {/* Example of Property Cards displaying property details */}
        <PropertyCard
          imgSrc={property1}
          title="An Exemplary Flat For You Near NCC Bank Limited"
          location="Block B, Bashundhara R-A"
          bedrooms="3"
          bathrooms="3"
          area="2290 sqft"
          price="৳ 22,500,000"
        />
        <PropertyCard
          imgSrc={property2}
          title="Beautiful Apartment of 1695 SQ FT Located in Block F"
          location="Block F, Bashundhara R-A"
          bedrooms="3"
          bathrooms="3"
          area="1695 sqft"
          price="৳ 13,500,000"
        />
      </section>
    </main>
  );
};

/**
 * PropertyCard component that displays the details of a single property.
 * It includes the property's image, title, location, number of bedrooms and bathrooms, 
 * floor area, price, and action buttons for contacting the property owner.
 * 
 * @param {Object} props - The props containing the property data.
 * @param {string} props.imgSrc - The source URL for the property image.
 * @param {string} props.title - The title of the property listing.
 * @param {string} props.location - The location of the property.
 * @param {string} props.bedrooms - The number of bedrooms in the property.
 * @param {string} props.bathrooms - The number of bathrooms in the property.
 * @param {string} props.area - The floor area of the property.
 * @param {string} props.price - The price of the property.
 * 
 * @returns {JSX.Element} The rendered PropertyCard component.
 */
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
          {/* Action buttons for contacting the property owner */}
          <button>Email</button>
          <button>Call</button>
        </div>
      </div>
    </div>
  );
};

export default Properties;