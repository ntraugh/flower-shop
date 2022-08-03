import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
// import Auth from '../../utils/auth';
import "./NavbarStyle.css";

function Navbar({ page, setPage }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      {/* if else for hamburger menu */}
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link
            to="/"
            onClick={() => setPage("Flower Shop | Home")}
            // Disables Link if the user is on that page
            style={"Flower Shop | Home" === page ? ({ color: "rgb(246, 189, 96)"}): null}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            onClick={() => setPage("Flower Shop | Login")}
            // Disables Link if the user is on that page
            style={"Flower Shop | Login" === page ? ({ color: "rgb(246, 189, 96)"}): null}
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/signup"
            onClick={() => setPage("Flower Shop | Sign up")}
            // Disables Link if the user is on that page
            style={"Flower Shop | Sign up" === page ? ({ color: "rgb(246, 189, 96)"}): null}
          >
            Sign up
          </Link>
        </li>
        <li>
          <Link
            to="/me"
            onClick={() => setPage("Flower Shop | Profile")}
            // Disables Link if the user is on that page
            style={"Flower Shop | Profile" === page ? ({ color: "rgb(246, 189, 96)"}): null}
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            to="/occasion"
            onClick={() => setPage("Flower Shop | Shop")}
            // Disables Link if the user is on that page
            style={"Flower Shop | Shop" === page ? ({ color: "rgb(246, 189, 96)"}): null}
          >
            Occasions
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={() => setPage("Flower Shop | Contact Us")}
            // Disables Link if the user is on that page
            style={"Flower Shop | Contact Us" === page ? ({ color: "rgb(246, 189, 96)"}): null}
          >
            Contact
          </Link>
        </li>
        <li>
        <Link to='/cart'>
          <FaShoppingCart
                            
          size={28}
          style={{ color: "rgb(242, 132, 130)", justifyContent: "flex-end"}}
          />
        </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "white" }} />
        ) : (
          <FaBars size={20} style={{ color: "rgb(242, 132, 130)" }} />
        )}
      </div>
    </div>
  );
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

export default Navbar;
