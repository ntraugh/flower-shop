import React, { useEffect, useState } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StoreProvider } from './utils/GlobalState';


import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import Occasion from './pages/Occasion';
import Bouquet from './pages/Bouquet';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Success from './pages/Success';
import BouquetList from './pages/BouquetList';


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [page, setPage] = useState("Flower Shop");
  let path = window.location.pathname;
  
  // sets correct page name upon reload
  useEffect(() => {
    if (path === "/" && page !=="Flower Shop | Home") setPage("Flower Shop | Home");
    else if (path === "/login" && page !=="Flower Shop | Login") setPage("Flower Shop | Login");
    else if (path === "/signup" && page !=="Flower Shop | Sign Up") setPage("Flower Shop | Sign Up");
    else if (path === "/me" && page !=="Flower Shop | Profile") setPage("Flower Shop | Profile");
    else if (path === "/occasion" && page !=="Flower Shop | Shop") setPage("Flower Shop | Shop");
    else if (path === "/contact" && page !=="Flower Shop | Contact Us") setPage("Flower Shop | Contact Us");
    else if (path === "/cart" && page !=="Flower Shop | Checkout") setPage("Flower Shop | Checkout");
    else if (page !=="Flower Shop") setPage("Flower Shop");
  }, []);

  // Changes document title according to pathname
  useEffect(() => {
    document.title = page;
  }, [page]);

  return (
    <ApolloProvider client={client}>
      <Router>
      <StoreProvider>
        <div id='wholePageContainer'>
          <Header page={page} setPage={setPage}/>
          <div id='mainSection' style={{flexGrow: "1"}}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/me" element={<Profile />} />
              <Route path="/users/:id" element={<Profile />} />
              <Route path="/occasion" element={<Occasion />} />
              <Route path="/occasion/:id" element={<BouquetList />} />
              <Route path="/bouquet/:id" element={<Bouquet />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/success" element={<Success />} />
            </Routes>
          </div>
          <Footer setPage={setPage} />
        </div>
      </StoreProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
