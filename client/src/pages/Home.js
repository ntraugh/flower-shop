// Node Modules
import React from 'react';
import { useQuery } from '@apollo/client';
// Utilities
import Auth from '../utils/auth';
import { QUERY_USERS } from '../utils/queries';
import Navbar from '../components/Navbar';
import FeaturedItemsList from '../components/FeaturedItemsList';
// Components

const Home = () => {
  const { loading, data } = useQuery(QUERY_USERS);
  const users = data?.users || [];


  // const renderUsername = () => {
  //   if (!Auth.loggedIn()) return null;
  //   return Auth.getProfile().data.username;
  // }

  return (
    <>
      <Navbar />
      <h1>Flower Shop</h1>
      <FeaturedItemsList />
      {/* body */}
      {/* footer */}
    </>
  );
};

export default Home;
