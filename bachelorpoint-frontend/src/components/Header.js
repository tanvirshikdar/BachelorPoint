import React from 'react';

/**
 * Header component that displays the header section of the page.
 * It contains the main title of the website.
 * 
 * @returns {JSX.Element} The rendered header component with the title.
 */
const Header = () => {
  return (
    <header className="header">
      {/* Main title of the website */}
      <h1>BachelorPoint</h1>
    </header>
  );
};

export default Header;