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
    
    const handleClick = () => {

    }

  return (
    <div className="cardBody">
      <Link className="cardPic" to={`/bouquet/${_id}`}>
        <img
          alt={name}
          src={image}
          />
      </Link>
      <div style={{paddingTop: "10px"}}>
        <p style={{fontWeight: "600"}}>{name}</p>
        <span style={{fontWeight: "600"}}>${price}</span>
      </div>
      <button style={{fontWeight: "600"}} onClick={addToCart}>Add to cart</button>
      <button style={{fontWeight: "600"}} Link to={`/bouquet/${_id}`}>View Details</button>
    </div>
  )
}

export default FeaturedItems