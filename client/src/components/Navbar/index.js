import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Auth from '../../utils/auth';
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

// If logged out show login controls
const logout = (event) => {
  event.preventDefault();
  Auth.logout();
};

if (Auth.loggedIn()) {
  return (
    <>
    <div className={color ? "header header-bg" : "header"}>
    {/* if else for hamburger menu */}
    <ul className={click ? "nav-menu active" : "nav-menu"}>
      <li>
        <Link
          to="/"
          onClick={() => setPage("Bouquet Now | Home")}
          style={"Bouquet Now | Home" === page ? ({ 
            color: "rgb(246, 189, 96)", 
            filter: "drop-shadow(.05rem .05rem .03rem rgba(244,144,12,255))"
          }): null}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/occasion"
          onClick={() => setPage("Bouquet Now | Shop")}
          style={"Bouquet Now | Shop" === page ? ({ 
            color: "rgb(246, 189, 96)", 
            filter: "drop-shadow(.05rem .05rem .03rem rgba(244,144,12,255))"
          }): null}
        >
          Occasions
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          onClick={() => setPage("Bouquet Now | Contact")}
          style={"Bouquet Now | Contact" === page ? ({ 
            color: "rgb(246, 189, 96)", 
            filter: "drop-shadow(.05rem .05rem .03rem rgba(244,144,12,255))"
          }): null}
        >
          Contact Us
        </Link>
      </li>
      <li>
        <Link
          to="/"
          onClick={logout}
          style={{ color: "rgb(242, 132, 130"}}

        >
          Logout
        </Link>
      </li>
    </ul>
    <div className="hamburger" onClick={handleClick}>
      {click ? (
        <FaTimes size={30} style={{ color: "white" }} />
      ) : (
        <FaBars size={20} style={{ color: "rgb(242, 132, 130)" }} />
      )}
    </div>
  </div>
    </>
  );
}

window.addEventListener("scroll", changeColor);

return (
  <div className={color ? "header header-bg" : "header"}>
    {/* if else for hamburger menu */}
    <ul className={click ? "nav-menu active" : "nav-menu"}>
      <li>
        <Link
          to="/"
          onClick={() => setPage("Bouquet Now | Home")}
          style={"Bouquet Now | Home" === page ? ({ 
            color: "rgb(246, 189, 96)", 
            filter: "drop-shadow(.05rem .05rem .03rem rgba(244,144,12,255))"
          }): null}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/login"
          onClick={() => setPage("Bouquet Now | Login")}
          style={"Bouquet Now | Login" === page ? ({ 
            color: "rgb(246, 189, 96)", 
            filter: "drop-shadow(.05rem .05rem .03rem rgba(244,144,12,255))"
          }): null}
        >
          Login
        </Link>
      </li>
      <li>
        <Link
          to="/signup"
          onClick={() => setPage("Bouquet Now | Sign up")}
          style={"Bouquet Now | Sign up" === page ? ({ 
            color: "rgb(246, 189, 96)", 
            filter: "drop-shadow(.05rem .05rem .03rem rgba(244,144,12,255))"
          }): null}
        >
          Sign up
        </Link>
      </li>
      <li>
        <Link
          to="/occasion"
          onClick={() => setPage("Bouquet Now | Shop")}
          style={"Bouquet Now | Shop" === page ? ({ 
            color: "rgb(246, 189, 96)", 
            filter: "drop-shadow(.05rem .05rem .03rem rgba(244,144,12,255))"
          }): null}

        >
          Occasions
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          onClick={() => setPage("Bouquet Now | Contact")}
          style={"Bouquet Now | Contact" === page ? ({ 
            color: "rgb(246, 189, 96)", 
            filter: "drop-shadow(.05rem .05rem .03rem rgba(244,144,12,255))"
          }): null}

        >
          Contact Us
        </Link>
      </li>
    </ul>
    <div className="hamburger" onClick={handleClick}>
      {click ? (
        <FaTimes size={30} style={{ color: "white" }} />
      ) : (
        <FaBars size={30} style={{ color: "rgb(242, 132, 130)" }} />
      )}
    </div>
  </div>
);
}


export default Navbar;