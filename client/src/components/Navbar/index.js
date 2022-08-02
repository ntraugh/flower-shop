import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa"
// import Auth from '../../utils/auth';
import "./NavbarStyle.css"

function Navbar() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const [color, setColor] = useState(false)
  const changeColor = () => {
    if(window.scrollY >= 1){
      setColor(true)
    }else{
      setColor(false)
    }
  }
 
 
  window.addEventListener("scroll", changeColor)


  return (
    <div className={color ? "header header-bg" : "header"}>
        {/* if else for hamburger menu */}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
          <li>
            <Link to="/me">Profile</Link>
          </li>
          <li>
            <Link to="/occasion">Occasions</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (<FaTimes size={20} style={{color: "white"}} />) 
            : (<FaBars size={20} style={{color: "black"}} />)}
        </div>
    </div>
  )
}
  // If logged out show login controls
  

     // const logout = (event) => {
  //   event.preventDefault();
  //   Auth.logout();
  // };
  
  // if (Auth.loggedIn()) {
  //   return (
  //     <>
  //       <Link to="/me">
  //         {Auth.getProfile().data.username}'s profile
  //       </Link>
  //       <button onClick={logout}>
  //         Logout
  //       </button>
  //     </>
  //   );
  // }
  


export default Navbar
