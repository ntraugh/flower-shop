import React from 'react';
import FeaturedItemsList from '../components/FeaturedItemsList';
import Hero from "../components/Hero"

const Home = (props) => {

  return (
    <main>
      <Hero {...props}/>
      <FeaturedItemsList />
    </main>
  );
};

export default Home;
