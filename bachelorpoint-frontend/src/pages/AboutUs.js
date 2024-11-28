import React from "react";
import '../assets/css/styles.css';

/**
 * AboutUs component that displays information about the company's mission.
 * This component focuses on the specific content for the "About Us" page, 
 * as the Header, Navbar, and Footer are already managed globally in App.js.
 * 
 * @returns {JSX.Element} The rendered About Us page content.
 */
const AboutUs = () => {
  return (
    <div className="container">
      <section className="about-section">
        {/* Mission statement heading */}
        <h1>Our Mission</h1>
        
        {/* Paragraph detailing the company's mission */}
        <p>
          At BachelorPoint, our mission is to provide affordable, flexible, and quality rental properties for bachelors.
          We understand the challenges of finding a comfortable and affordable living space, especially when you are new
          to the city or living alone. That's why we have built a platform that simplifies this process, giving you
          access to the best properties suited for your needs.
        </p>
        
        {/* Paragraph describing the target audience and goals */}
        <p>
          Whether you're a student, a young professional, or simply someone looking for a suitable living environment,
          our goal is to bring you a wide range of properties, modern amenities, and reliable support, all at your
          fingertips.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;