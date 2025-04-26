import React from "react";
import "../assets/css/styles.css";

// Import roommate images for display
import roommate1 from "../assets/images/roommate1.jpg";
import roommate2 from "../assets/images/roommate2.jpg";
import roommate3 from "../assets/images/roommate3.jpg";

/**
 * RoommateMatching component that allows users to enter their preferences for finding roommates.
 * It displays a list of matched roommates and provides a way to contact them.
 * 
 * @returns {JSX.Element} The rendered Roommate Matching page, including input for preferences
 * and a list of matched roommates.
 */
const RoommateMatching = () => {
  /**
   * Finds roommates based on user preferences.
   * Currently logs a message, but can be extended with actual functionality (e.g., API call).
   */
  const findRoommates = () => {
    console.log("Finding roommates based on preferences...");
    // Implement the logic to find roommates based on preferences (e.g., API call)
  };

  /**
   * Contacts a specific roommate using their ID.
   * Logs the contact action; can be extended to trigger an email or other contact method.
   * 
   * @param {number} id - The ID of the roommate to contact.
   */
  const contactRoommate = (id) => {
    console.log(`Contacting roommate with ID ${id}...`);
    // Implement the logic to contact the selected roommate
  };

  return (
    <main className="container">
      {/* Preferences section where users can enter their roommate preferences */}
      <section className="preferences-section">
        <h2>Enter Preferences</h2>
        
        {/* Input fields for entering preferences such as budget, location, and gender */}
        <div className="preferences-inputs">
          <input
            type="text"
            placeholder="Budget (e.g., 5000-10000 BDT)"
            className="filter-input"
          />
          <input
            type="text"
            placeholder="Preferred Location (e.g., Gulshan, Banani)"
            className="filter-input"
          />
          <select className="filter-input">
            <option value="">Gender Preference</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="any">Any</option>
          </select>
        </div>
        
        {/* Button to trigger the roommate search based on entered preferences */}
        <button onClick={findRoommates} className="filter-button">
          Find Roommates
        </button>
      </section>

      {/* Section displaying the list of matched roommates */}
      <section className="matched-roommates">
        <h2>Matched Roommates</h2>

        {/* Display list of roommate cards */}
        <div className="roommate-list">
          {/* Roommate card 1 */}
          <div className="roommate-card">
            <img src={roommate1} alt="Roommate 1" className="roommate-image" />
            <div className="details">
              <p><strong>Name:</strong> Roommate 1</p>
              <p><strong>Budget:</strong> 8,000 BDT/month</p>
              <p><strong>Preferred Location:</strong> Gulshan</p>
            </div>
            <button
              onClick={() => contactRoommate(1)}
              className="contact-button"
            >
              Contact
            </button>
          </div>

          {/* Roommate card 2 */}
          <div className="roommate-card">
            <img src={roommate2} alt="Roommate 2" className="roommate-image" />
            <div className="details">
              <p><strong>Name:</strong> Roommate 2</p>
              <p><strong>Budget:</strong> 10,000 BDT/month</p>
              <p><strong>Preferred Location:</strong> Banani</p>
            </div>
            <button
              onClick={() => contactRoommate(2)}
              className="contact-button"
            >
              Contact
            </button>
          </div>

          {/* Roommate card 3 */}
          <div className="roommate-card">
            <img src={roommate3} alt="Roommate 3" className="roommate-image" />
            <div className="details">
              <p><strong>Name:</strong> Roommate 3</p>
              <p><strong>Budget:</strong> 12,000 BDT/month</p>
              <p><strong>Preferred Location:</strong> Dhanmondi</p>
            </div>
            <button
              onClick={() => contactRoommate(3)}
              className="contact-button"
            >
              Contact
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RoommateMatching;