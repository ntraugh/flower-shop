import React from 'react';
import { QUERY_OCCASIONS } from "../../utils/queries";
import { useQuery } from '@apollo/client';
import "./Occasion.css";

function Occasion() {
  const { loading, data } = useQuery(QUERY_OCCASIONS);

  data?.occasions.map()

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
      <div id='occImgContainer'>
        <img src='/images/anniversary.jpg' alt='Anniversary' id='occImage' />
        <div id='imageOverlay'>
          <div id='occTitle'><a href='/occasion/:id'>Anniversary</a></div>
        </div>
      </div>
      <div id='occImgContainer'>
        <img src='/images/birthday.jpg' alt='Birthday' id='occImage' />
        <div id='imageOverlay'>
          <div id='occTitle'><a href='/occasion/:id'>Birthday</a></div>
        </div>
      </div>
      <div id='occImgContainer'>
        <img src='/images/congrats.jpg' alt='Congratulations' id='occImage' />
        <div id='imageOverlay'>
          <div id='occTitle'><a href='/occasion/:id'>Congratulations</a></div>
        </div>
      </div>
      <div id='occImgContainer'>
        <img src='/images/getwell.jpg' alt='Get Well' id='occImage' />
        <div id='imageOverlay'>
          <div id='occTitle'><a href='/occasion/:id'>Get Well</a></div>
        </div>
      </div>
      <div id='occImgContainer'>
        <img src='/images/romance.jpg' alt='Romance' id='occImage' />
        <div id='imageOverlay'>
          <div id='occTitle'><a href='/occasion/:id'>Romance</a></div>
        </div>
      </div>
      <div id='occImgContainer'>
        <img src='/images/thanks.jpg' alt='Thank You' id='occImage' />
        <div id='imageOverlay'>
          <div id='occTitle'><a href='/occasion/:id'>Thank You</a></div>
        </div>
      </div>
    </main>
  )
};

export default Occasion;