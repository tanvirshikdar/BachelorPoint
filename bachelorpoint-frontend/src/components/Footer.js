import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 BachelorPoint. All Rights Reserved.</p>
        <div className="social-media">
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="Facebook" className="social-icon" /></a>
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="social-icon" /></a>
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" className="social-icon" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;