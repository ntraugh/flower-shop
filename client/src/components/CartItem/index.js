// UNCC Bootcamp Code || Instructor Anthony Cooper
import React from 'react';
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import "./CartItem.css";

const CartItem = ({ item }) => {

  const [, dispatch] = useStoreContext();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });

  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      idbPromise('cart', 'delete', { ...item });

    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });

    }
  }

  return (
    <div className="flex-row">
      <div>
        <img
          src={item.image}
          alt={item.name}
        />
      </div>
      <div className="cartItemPrice">
        <div className="cartItemTitle">{item.name}</div>
        <div className="productQty">
          <span className="qtyLabel">Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
          />
          <button
            onClick={() => removeFromCart(item)}
            className="deleteBtn"
          >
            X
          </button>
        </div>
        <div>${item.price}</div>
      </div>
    </div>
  );
}

export default CartItem;
