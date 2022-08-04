import React, {useEffect} from 'react';
import Navbar from '../Navbar';
import { Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa"
import { useStoreContext } from "../../utils/GlobalState";
import "./HeaderStyle.css"

const Header = (props) => {
  const [state, dispatch] = useStoreContext();
  const { cart } = state
  let cartArray = cart
  useEffect(() => {
    const { cart } = state
    let cartArray = cart
  }, []);

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
      <div className='cartIcon'>
        <Link to='/cart'>
          <FaShoppingCart
            size={40}
            onClick={() => props.setPage("Flower Shop | Checkout")}
            style={"Flower Shop | Checkout" === props.page ? ({ color: "rgb(246, 189, 96)"}): null}
            /> <p className='cartNoti'>{ cartArray.reduce((p, c) => p + c.purchaseQuantity, 0)  }</p>
        </Link>
      </div>
    </div>
   <Navbar {...props} />
    </>
  );
};

export default Header;
