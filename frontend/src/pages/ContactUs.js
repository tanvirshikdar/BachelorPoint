import React from 'react';
import '../assets/css/styles.css';

// Importing team member images
import team2 from '../assets/images/developer.jpg';
import team4 from '../assets/images/tester.jpg';

/**
 * ContactUs component that renders the contact form and the team section.
 * This component focuses on the specific content for the "Contact Us" page,
 * as the Header, Navbar, and Footer are already managed globally in App.js.
 * 
 * @returns {JSX.Element} The rendered Contact Us page content.
 */
const ContactUs = () => {
  return (
    <main className="container">
      {/* Contact form section */}
      <section className="contact-section">
        <h2>Get in Touch</h2>
        
        {/* Contact form with fields for name, email, and message */}
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Team section displaying key team members */}
      <section className="team-section">
        <h2>Meet the Team</h2>
        
        {/* Container for displaying team members */}
        <div className="team-members">
          {/* Team member 1 */}
          <div className="team-member">
            <img src={team2} alt="Tanvir Shikdar" />
            <h3>Tanvir Shikdar</h3>
            <div className="member-details">
              <p className="role">Developer</p>
              <p className="department">Computer Science & Engineering</p>
              <p className="university">North South University</p>
            </div>
          </div>
          
          {/* Team member 2 */}
          <div className="team-member">
            <img src={team4} alt="Sheik Hassan​" />
            <h3>Sheik Hassan​</h3>
            <div className="member-details">
              <p className="role">Tester</p>
              <p className="department">Computer Science & Engineering</p>
              <p className="university">North South University</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;