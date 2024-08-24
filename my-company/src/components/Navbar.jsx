import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
        </li>
        <li style={liStyle}>
          <Link to="/about" style={linkStyle}>About</Link>
        </li>
        <li style={liStyle}>
          <Link to="/services" style={linkStyle}>Services</Link>
        </li>
        <li style={liStyle}>
          <Link to="/contact" style={linkStyle}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

const navStyle = {
  backgroundColor: '#333',
  padding: '10px 0',
  textAlign: 'center'
};

const ulStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  justifyContent: 'center'
};

const liStyle = {
  margin: '0 15px'
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '18px'
};

export default Navbar;
