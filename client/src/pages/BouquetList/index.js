import React from 'react';
import { QUERY_ALL_BOUQUETS } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { useParams, Link } from "react-router-dom";
import FeaturedItems from '../../components/FeaturedItems';
import './BouquetList.css';

function BouquetList() {
    const { id } = useParams();
    const { loading, data } = useQuery(QUERY_ALL_BOUQUETS, {
        variables: { occasionId: id }
    });
    
    const items = data?.allBouquets || [];

    const findTitle = (bouquets) => {
        const occasions = bouquets[0].occasion;
        for (let i = 0; i < occasions.length; i++ ) {
            if (occasions[i]._id === id) {
                return occasions[i].name;
            }
        }
    }


    if (loading) {
        return (
            <div>
                <h2>Loading...</h2>
            </div>
        )
    }

    return (
        <main className='singleOccContainer'>
            <h2>{findTitle(items)}</h2>
            <div id="singleOccasion">
            {items?.map((item) => (
                      <FeaturedItems 
                          key={item._id}
                          _id={item._id}
                          image={item.image}
                          name={item.name}
                          price={item.price}
                          />
                  )) ||" No items to display"}
            </div>
        </main>
    )
};

export default BouquetList;