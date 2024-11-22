import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/css/styles.css';

import team2 from '../assets/images/team2.jpg';
import team3 from '../assets/images/team3.jpg';
import team4 from '../assets/images/team4.jpg';

const ContactUs = () => {
  return (
    <div>
      <Header />
      <Navbar />

      <main className="container">
        <section className="contact-section">
          <h2>Get in Touch</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>

        <section className="team-section">
          <h2>Meet the Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src={team2} alt="Jane Smith" />
              <h3>Jane Smith</h3>
              <p>Marketing Head</p>
            </div>
            <div className="team-member">
              <img src={team3} alt="Michael Johnson" />
              <h3>Michael Johnson</h3>
              <p>Operations Manager</p>
            </div>
            <div className="team-member">
              <img src={team4} alt="Emily White" />
              <h3>Emily White</h3>
              <p>Customer Support Lead</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;