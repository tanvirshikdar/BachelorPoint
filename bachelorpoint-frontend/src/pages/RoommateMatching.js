import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/css/styles.css';

import roommate1 from '../assets/images/roommate1.jpg';
import roommate2 from '../assets/images/roommate2.jpg';
import roommate3 from '../assets/images/roommate3.jpg';

const RoommateMatching = () => {
  const findRoommates = () => {
    // Implement findRoommates functionality
    console.log('Finding roommates...');
  };

  const contactRoommate = (id) => {
    // Implement contactRoommate functionality
    console.log(`Contacting roommate ${id}...`);
  };

  return (
    <div>
      <Header />
      <Navbar />

      <main className="container">
        <section className="preferences-section">
          <h2>Enter Preferences</h2>
          <input type="text" placeholder="Budget" />
          <input type="text" placeholder="Preferred Location" />
          <input type="text" placeholder="Gender" />
          <button onClick={findRoommates}>Find Roommates</button>
        </section>

        <section className="matched-roommates">
          <h2>Matched Roommates</h2>

          <div className="roommate-card">
            <img src={roommate1} alt="Roommate 1" />
            <div className="details">
              <p><strong>Name:</strong> Roommate 1</p>
              <p><strong>Budget:</strong> BDT X/month</p>
              <p><strong>Preferred Location:</strong> Dhaka</p>
            </div>
            <button onClick={() => contactRoommate(1)}>Contact</button>
          </div>

          <div className="roommate-card">
            <img src={roommate2} alt="Roommate 2" />
            <div className="details">
              <p><strong>Name:</strong> Roommate 2</p>
              <p><strong>Budget:</strong> BDT X/month</p>
              <p><strong>Preferred Location:</strong> Dhaka</p>
            </div>
            <button onClick={() => contactRoommate(2)}>Contact</button>
          </div>

          <div className="roommate-card">
            <img src={roommate3} alt="Roommate 3" />
            <div className="details">
              <p><strong>Name:</strong> Roommate 3</p>
              <p><strong>Budget:</strong> BDT X/month</p>
              <p><strong>Preferred Location:</strong> Dhaka</p>
            </div>
            <button onClick={() => contactRoommate(3)}>Contact</button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RoommateMatching;