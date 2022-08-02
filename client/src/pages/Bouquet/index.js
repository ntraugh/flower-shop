import React from 'react';
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { useParams, Link } from "react-router-dom"
import { useQuery } from "@apollo/client";
import { QUERY_BOUQUET } from "../../utils/queries";
import "./bouquet.css"

const BouquetSingle = () => {
  const { id } = useParams();
  const [state, dispatch] = useStoreContext();
  console.log(id);
  const { loading, data } = useQuery(QUERY_BOUQUET, {
    variables: { bouquetId: id }
  });
  console.log(data);
  const bouquet = data?.bouquet || {};

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  const {
    _id,
    name,
    description,
    image,
    price
  } = bouquet;

  // const { cart } = state;

  // const addToCart = () => {
  //   const itemInCart = cart.find((cartItem) => cartItem._id === _id)
  //   if (itemInCart) {
  //     dispatch({
  //       type: UPDATE_CART_QUANTITY,
  //       _id: _id,
  //       purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
  //     });
  //     idbPromise('cart', 'put', {
  //       ...itemInCart,
  //       purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
  //     });
  //   } else {
  //     dispatch({
  //       type: ADD_TO_CART,
  //       product: { ...item, purchaseQuantity: 1 }
  //     });
  //     idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
  //   }
  // }

  return (
    <>
    <div className='bouquetSingleName'>
      <h2>{bouquet.name}</h2>
    </div>
    <div className='bouquetSingleImg'>
      <img src={image} alt={name}/>
    </div>
    <div className='bouquetSingleText'><span>${price}</span><p>{description}</p></div>
    <div>
    <button className='bouquetSingleCart'>Add To Cart</button>
    </div> 
    </>
  )
};

export default BouquetSingle;