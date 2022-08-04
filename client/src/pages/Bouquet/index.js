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
  const { loading, data } = useQuery(QUERY_BOUQUET, {
    variables: { bouquetId: id }
  });
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
      <main className='singleContainer'>
        <aside className='left-column'>
          <img className='bouquetImg' src={image} alt={name} />
        </aside>
        <section className='right-column'>

          <div className='bouquetDescription'>
            <h2>{bouquet.name}</h2>
            <p>{description}</p>
          </div>
          <div>
            <span className='bouquetPrice'>${price}</span>
          </div>
          <div id='cartBtn'>
            <button id='cartBtnTxt'>Add To Cart</button>
          </div>

        </section>
      </main>
    </>
  )
};

export default BouquetSingle;