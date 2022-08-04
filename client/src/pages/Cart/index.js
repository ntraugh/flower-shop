// UNCC Bootcamp Code || Instructor Anthony Cooper
import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../../components/CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import { Link } from 'react-router-dom';
import "./Cart.css";

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}

          <div>
            <strong>Total: ${calculateTotal()}</strong>

            {Auth.loggedIn() ? (
              <button classname="checkoutBtn" onClick={submitCheckout} style={{ cursor: "pointer"}}>Checkout</button>
            ) : (
              <Link to="/login">
                <button classname="checkoutBtn" style={{ cursor: "pointer"}}>Login to Checkout</button>
              </Link>
            )}
          </div>
        </div>
      ) : (
        <section>
          <h3>
            You haven't added anything to your cart yet!
          </h3>
          <div style={{margin: "2rem"}}>
            <Link to="/occasion" style={{ cursor: "pointer", padding: "8px", border: "solid 4px "}}>Shop Now</Link>
          </div>
        </section>
      )}
    </div>
  );
};

export default Cart;