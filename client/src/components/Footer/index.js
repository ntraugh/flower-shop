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
          <a href="https://www.google.com/maps/@35.5043075,-80.9124993,12.04z">Address: 1763 Rose Lane. Charlotte, NC</a>
          </li>
          <li className='listItem'>
            <Link to="/Contact">Contact Us</Link>
          </li>
      </ul>
    </footer>
  );
};

export default Footer;
