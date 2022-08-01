// Node Modules
import React from 'react';
import { useQuery } from '@apollo/client';
// Utilities
import Auth from '../utils/auth';
import { QUERY_USERS } from '../utils/queries';
// Components

const Home = () => {
  const { loading, data } = useQuery(QUERY_USERS);
  const users = data?.users || [];


  // const renderUsername = () => {
  //   if (!Auth.loggedIn()) return null;
  //   return Auth.getProfile().data.username;
  // }

  return (
      <main>
        {/* <div>
          {renderUsername()}
        </div> */}
      </main>
  );
};

export default Home;
