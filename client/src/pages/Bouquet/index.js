import React from 'react'
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { Link } from "react-router-dom"
import { useQuery } from "@apollo/react-hooks";
import React from "react";
import { QUERY_BOUQUET } from "../../utils/queries";

const BouquetSingle = () => {
    const [state, dispatch] = useStoreContext();
    const { loading, data } = useQuery( QUERY_BOUQUET );

    useEffect(() => {
        if (data) {
          dispatch({
            type: QUERY_BOUQUET,
            products: data.bouquet,
          });
          data.bouquet.forEach((bouquet) => {
            idbPromise('bouquets', 'put', bouquet);
          });
        } else if (!loading) {
          idbPromise('bouquets', 'get').then((bouquets) => {
            dispatch({
              type: QUERY_BOUQUET,
              products: bouquets,
            });
          });
        }
      }, [data, loading, dispatch]);
      
      if (loading) {
          return <h2>LOADING...</h2>;
        }

    const {
        _id,
        name,
        description,
        image,
        price,
        featured,
    } = item;

    const { cart } = state;

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
       <div>
        <h2>{data.bouquet.name}</h2>
       </div> 
    )
};

export default BouquetSingle;