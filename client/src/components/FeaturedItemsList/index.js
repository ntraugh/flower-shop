import React from 'react'
import { QUERY_FEATURED } from "../../utils/queries"
import { useQuery } from '@apollo/client';
import FeaturedItems from '../FeaturedItems';
import "./FeaturedItemsList.css"

const FeaturedItemsList = () => {
    const { loading, data } = useQuery( QUERY_FEATURED );

    if(loading){
        return (
            <div>
                <h2>Loading...</h2>
            </div>
        )
    }
    return (
        <div className='featuredText'>
            <div id="featuredContainer">
              {data?.featured.map((item) => (
                      <FeaturedItems 
                          key={item._id}
                          _id={item._id}
                          image={item.image}
                          name={item.name}
                          price={item.price}
                          />
                  )) ||" No items to display"}
            </div>
        </div>
    )
}

export default FeaturedItemsList