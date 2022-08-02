import React, { useEffect } from 'react'
import { QUERY_FEATURED } from "../../utils/queries"
import { useQuery } from '@apollo/client';
import FeaturedItems from '../FeaturedItems';
import { idbPromise } from '../../utils/helpers';
import { useStoreContext } from '../../utils/GlobalState';
import "./FeaturedItemsList.css"

const FeaturedItemsList = () => {
    const [state, dispatch] = useStoreContext();

    const { loading, data } = useQuery( QUERY_FEATURED );

    // useEffect(() => {
    //     if (data) {
    //       dispatch({
    //         type: QUERY_FEATURED,
    //         products: data.featured,
    //       });
    //       data?.featured.forEach((product) => {
    //         idbPromise('products', 'put', product);
    //       });
    //     } else if (!loading) {
    //       idbPromise('products', 'get').then((products) => {
    //         dispatch({
    //           type: QUERY_FEATURED,
    //           products: products,
    //         });
    //       });
    //     }
    //   }, [data, loading, dispatch]);

    if(loading){
        return (
            <div>
                <h2>Loading...</h2>
            </div>
        )
    }
    return (
        <div>
            <h2>Featured Items:</h2>
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