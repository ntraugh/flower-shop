import React from 'react'
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { Link } from "react-router-dom"
import "./FeaturedItems.css"

const FeaturedItems = (item) => {
    const [state, dispatch] = useStoreContext();

    const {
        image,
        _id,
        name,
        price,
    } = item;

    console.log(_id);

    const { cart } = state

    const addToCart = () => {
      const itemInCart = cart.find((cartItem) => cartItem._id === _id)
      if (itemInCart) {
        dispatch({
          type: UPDATE_CART_QUANTITY,
          _id: _id,
          purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
        });
        idbPromise('cart', 'put', {
          ...itemInCart,
          purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
        });
      } else {
        dispatch({
          type: ADD_TO_CART,
          product: { ...item, purchaseQuantity: 1 }
        });
        idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
      }
    }

  return (
    <div className="cardBody">
      <Link to={'/bouquet/' + _id}>
        <img
            alt={name}
            src={image}
            className="cardPic"
        />
      </Link>
      <div className="cardContent">
        <p style={{fontWeight: "600"}}>{name}</p>
        <p style={{fontWeight: "600"}}>${price}</p>
        <button className="addToCart" style={{fontWeight: "600", cursor: "pointer"}} onClick={addToCart}><u>Add to cart</u></button>
        <Link to={'/bouquet/' + _id}>
          <button className="viewDetails" style={{fontWeight: "600", cursor: "pointer"}}>View Details</button>
        </Link>
      </div>
    </div>
  )
}

export default FeaturedItems