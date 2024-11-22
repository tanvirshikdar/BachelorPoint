import React from "react";
import Header from "../components/Header"; // Corrected path for Header
import Navbar from "../components/Navbar"; // Corrected path for Navbar
import Footer from "../components/Footer"; // Corrected path for Footer
import "../App.css"; // Adjusted path to match the styles file

const AboutUs = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="container">
        <section className="about-section">
          <h1>Our Mission</h1>
          <p>
            At BachelorPoint, our mission is to provide affordable, flexible, and quality rental properties for bachelors.
            We understand the challenges of finding a comfortable and affordable living space, especially when you are new
            to the city or living alone. That's why we have built a platform that simplifies this process, giving you
            access to the best properties suited for your needs.
          </p>
          <p>
            Whether you're a student, a young professional, or simply someone looking for a suitable living environment,
            our goal is to bring you a wide range of properties, modern amenities, and reliable support, all at your
            fingertips.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
