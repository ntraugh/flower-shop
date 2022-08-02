import React from 'react'
import { QUERY_FEATURED } from "../../utils/queries"
import { useQuery } from '@apollo/client';
import FeaturedItems from '../FeaturedItems';




const FeaturedItemsList = () => {
    const { loading, data } = useQuery( QUERY_FEATURED )
    return (
        <div>
            <h2>Featured Items:</h2>
            {/* {data.map((product) => (
                <FeaturedItems />

            ))} */}
        </div>
    )
}

export default FeaturedItemsList