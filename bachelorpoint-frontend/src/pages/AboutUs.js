import React from 'react';

const AboutUs = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', color: '#333', margin: 0, padding: 0 }}>
      <header style={{ backgroundColor: '#333', color: '#fff', padding: '20px', textAlign: 'center' }}>
        <h1>BachelorPoint</h1>
      </header>
      
      <nav style={{ backgroundColor: '#444', padding: '10px', textAlign: 'center' }}>
        <a href="/" style={{ color: '#fff', margin: '0 15px', textDecoration: 'none', fontWeight: 'bold' }}>Home</a>
        <a href="/properties" style={{ color: '#fff', margin: '0 15px', textDecoration: 'none', fontWeight: 'bold' }}>Properties</a>
        <a href="/roommate-matching" style={{ color: '#fff', margin: '0 15px', textDecoration: 'none', fontWeight: 'bold' }}>Roommate Matching</a>
        <a href="/about-us" style={{ color: '#fff', margin: '0 15px', textDecoration: 'none', fontWeight: 'bold' }}>About Us</a>
        <a href="/contact-us" style={{ color: '#fff', margin: '0 15px', textDecoration: 'none', fontWeight: 'bold' }}>Contact Us</a>
      </nav>
      
      <section className="about-section" style={{
        padding: '40px',
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Our Mission</h2>
        <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
          At BachelorPoint, our mission is to provide affordable, flexible, and quality rental properties for bachelors.
          We understand the challenges of finding a comfortable and affordable living space, especially when you are new
          to the city or living alone. That's why we have built a platform that simplifies this process, giving you
          access to the best properties suited for your needs.
        </p>
        <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
          Whether you're a student, a young professional, or simply someone looking for a suitable living environment,
          our goal is to bring you a wide range of properties, modern amenities, and reliable support, all at your fingertips.
        </p>
      </section>

      <footer style={{
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '20px',
        marginTop: '20px',
      }}>
        <p>&copy; 2024 BachelorPoint. All Rights Reserved.</p>
        <div className="social-icons" style={{ marginTop: '10px' }}>
          <a href="#"><img src="../assets/images/facebook-icon.png" alt="Facebook" style={{ width: '24px', margin: '0 10px', cursor: 'pointer' }} /></a>
          <a href="#"><img src="../assets/images/twitter-icon.png" alt="Twitter" style={{ width: '24px', margin: '0 10px', cursor: 'pointer' }} /></a>
          <a href="#"><img src="../assets/images/instagram-icon.png" alt="Instagram" style={{ width: '24px', margin: '0 10px', cursor: 'pointer' }} /></a>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;