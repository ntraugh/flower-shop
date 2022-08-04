import React, {useEffect, useState} from 'react';
import Navbar from '../Navbar';
import { Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa"
import { useStoreContext } from "../../utils/GlobalState";
import "./HeaderStyle.css"
import { idbPromise } from '../../utils/helpers';

const Header = (props) => {
  // Using Global State to get cart array
  const [{ cart }, dispatch] = useStoreContext();
  const [cartArray, setCartArray] = useState(cart);

  // If the cart cannot be recieved from Global State, array will be provided by idb
  useEffect(() => {
    async function getCart() {
      const newCart = await idbPromise('cart', 'get');
      setCartArray(newCart);
    }

    if (!cart.length) {
      getCart();
    }
  }, [cart.length, dispatch]);

  return (
    <>
   <div className='headerInfo'>
    <h1>
      <Link to="/" onClick={() => props.setPage("Flower Shop | Home")}>
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
            /> 
          <p className='cartNoti'>
            { 
              // reduce cart to get total purchases
              cart?.reduce((p, c) => p + c.purchaseQuantity, 0) ||  
              cartArray?.reduce((p, c) => p + c.purchaseQuantity, 0)
            }
          </p>
        </Link>
      </div>
    </div>
   <Navbar {...props} />
    </>
  );
};

export default Header;
