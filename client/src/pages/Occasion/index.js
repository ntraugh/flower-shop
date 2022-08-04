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
      {stuff?.map((occasion) => {
        return (
          <div id='occImgContainer'>
              <div id='occTitle'>
                <Link to={'/occasion/' + occasion._id}>{occasion.name}</Link>
              </div>
            <Link to={'/occasion/' + occasion._id}><img src={occasion.image} alt={occasion.name} id='occImage' /></Link>
            <div id='imageOverlay'>
            </div>
          </div>
        )
      })}
    </main>
  )
};

export default Occasion;