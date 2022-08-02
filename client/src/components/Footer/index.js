import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <ul className='footerNav'>
        <li className='listItem' id='hours'>
          Monday-Friday: 8AM - 6PM
          <br></br>
          Saturday: 10AM - 8PM
          <br></br>
          Sunday: Noon-5PM
        </li>
        <li className='listItem' id='address'>
          1 Rose Blvd 
          Daisyville, NC 
          </li>
          <li className='listItem' id='contact'>
            Contact Us
          </li>
      </ul>
    </footer>
  );
};

export default Footer;
