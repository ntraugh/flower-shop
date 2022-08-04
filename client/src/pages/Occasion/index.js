import React from 'react';
import { QUERY_OCCASIONS } from "../../utils/queries";
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import "./Occasion.css";

function Occasion() {
  const { loading, data } = useQuery(QUERY_OCCASIONS);

  const stuff = data?.occasions || [];

  console.log(stuff);

  if (loading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    )
  }

  return (

    <main id='container'>
      <div id='occH2'>
        <h2>Occasions</h2>
      </div>
      <div id='contentHolder'>
      {stuff?.map((occasion) => {
        return (

          <div id='occImgContainer'>

            <Link to={'/occasion/' + occasion._id}>
              <h3 id='occTitle'>{occasion.name}</h3>
              </Link>

            <Link to={'/occasion/' + occasion._id}>
              <img src={occasion.image} alt={occasion.name} id='occImage' />
              </Link>

          </div>
        )
      })}
      </div>
    </main>
  )
};

export default Occasion;