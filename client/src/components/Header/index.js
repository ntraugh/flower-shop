import React from 'react';
import Navbar from '../Navbar';
import { Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa"
import "./HeaderStyle.css"

const Header = (props) => {
  return (
    <>
   <div className='headerInfo'>
    <h1>
      <Link to="/">
      <span className='headerImg'>
        <img src='/images/favicon-32x32.png' alt='logo'></img>
      </span>Flower Shop
      </Link>
    </h1>
        <Link to='/cart'>
          <FaShoppingCart
                            
          size={40}
          onClick={() => props.setPage("Flower Shop | Checkout")}
          style={"Flower Shop | Checkout" === props.page ? ({ color: "rgb(246, 189, 96)"}): null}
          />
        </Link>
    </div>
   <Navbar {...props} />
    </>
  );
};

export default Header;
