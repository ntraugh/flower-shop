// UNCC Bootcamp Code || Instructor Anthony Cooper
import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';
import { Link } from 'react-router-dom';

function Success(props) {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
      const products = cart.map((item) => item._id);

      if (products.length) {
        const { data } = await addOrder({ variables: { products } });
        const productData = data.addOrder.products;

        productData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }

    }

    saveOrder();
  }, [addOrder]);

  return (
    <div style={{textAlign: "center", flexGrow: "1" }}>
        <h1>Success!</h1>
        <h2 style={{margin: "1rem"}}>Thank you for your purchase!</h2>
        <div style={{margin: "2rem"}}>
          <Link 
            to="/"
            style={{ cursor: "pointer", padding: "4px", border: "solid 4px "}}
            onClick={() => props.setPage("Bouquet Now | Home")}>
            Back to Home Page
          </Link>
        </div>
    </div>
  );
}

export default Success;
