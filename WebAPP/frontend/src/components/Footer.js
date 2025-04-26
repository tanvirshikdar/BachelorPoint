import React from 'react';

/**
 * Footer component that displays the footer section of the page.
 * It includes the copyright notice and links to social media platforms.
 * 
 * @returns {JSX.Element} The rendered footer component.
 */
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Displaying copyright notice */}
        <p>&copy; 2024 BachelorPoint. All Rights Reserved.</p>
        
        {/* Social media links */}
        <div className="social-media">
          {/* Facebook icon link */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
              alt="Facebook"
              className="social-icon"
            />
          </a>
          
          {/* Twitter icon link */}
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
              alt="Twitter"
              className="social-icon"
            />
          </a>
          
          {/* Instagram icon link */}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
              alt="Instagram"
              className="social-icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;