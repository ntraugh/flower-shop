import React from 'react';
import { Link } from 'react-router-dom';
import ig from "../Footer/ig.png"
import yelp from "../Footer/yelp.png"

import './Footer.css'


const Footer = (props) => {
  return (
    <footer>
      <ul className='footerNav'>
        <li className='listItem tooltip' id='hours'>
          Monday-<a href="https://spongebob.fandom.com/wiki/List_of_SpongeBob_fan_sites">Friday<span style={{backgroundImage: `url(/images/spongebobpetals.png)`}}></span></a>: 8AM - 6PM
          <br></br>
          Saturday: 10AM - 8PM
          <br></br>
          Sunday: Noon-5PM
        </li>
        <li className='listItem' id='address'>
          <a href="https://www.google.com/maps/@35.5043075,-80.9124993,12.04z">1763 Rose Lane. Charlotte, NC</a>
          </li>
          <li className='listItem'>
            <Link to="/Contact" onClick={() => props.setPage("Bouquet Now | Contact")}>Contact Us</Link>
          </li>
          <li className='listItem' id='ig'>
            <a href='https://www.instagram.com/flowerpuns/' alt='Instagram'>
            <img className="icon" src={ig} alt="Instagram" width='64'></img>
            </a>
          </li>

          <li className='listItem' id='yelp'>
            <a href='https://www.yelp.com/search?find_desc=Flower+Shop&find_loc=Charlotte%2C+NC' alt='Yelp'>
            <img className="icon" src={yelp} alt="Yelp" width='64'></img>
            </a>
          </li>
      </ul>
    </footer>
  );
};

export default Footer;
