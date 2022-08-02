import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <ul className='footerNav'>
        <li className='hours'>
          Monday-Friday: 8:00AM - 6:00PM
          Saturday: 10:00AM - 8:00PM
          Sunday: Noon-5:00PM
        </li>
        <li className='address'>
          1 Rose Blvd 
          Daisyville, NC 
          </li>
          <li className='linkToContact'>
            <link></link>
          </li>
      </ul>
    </footer>
  );
};

export default Footer;
