import React from 'react';
import '../assets/css/styles.css';

// Importing team member images
import team2 from '../assets/images/team2.jpg';
import team3 from '../assets/images/team3.jpg';
import team4 from '../assets/images/team4.jpg';

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
            <img src={team2} alt="Jane Smith" />
            <h3>Jane Smith</h3>
            <p>Marketing Head</p>
          </div>
          
          {/* Team member 2 */}
          <div className="team-member">
            <img src={team3} alt="Michael Johnson" />
            <h3>Michael Johnson</h3>
            <p>Operations Manager</p>
          </div>
          
          {/* Team member 3 */}
          <div className="team-member">
            <img src={team4} alt="Emily White" />
            <h3>Emily White</h3>
            <p>Customer Support Lead</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;