import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><a href="/">Home</a></li>
        <li><a href="/properties">Properties</a></li>
        <li><a href="/roommate-matching">Roommate Matching</a></li>
        <li><a href="/about-us">About Us</a></li>
        <li><a href="/contact-us">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;