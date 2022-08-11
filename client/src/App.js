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
  const [page, setPage] = useState("Bouquet Now");
  let path = window.location.pathname;
  
  // sets correct page name upon reload
  useEffect(() => {
    if (path === "/" && page !=="Bouquet Now | Home") setPage("Bouquet Now | Home");
    else if (path === "/login" && page !=="Bouquet Now | Login") setPage("Bouquet Now | Login");
    else if (path === "/signup" && page !=="Bouquet Now | Sign Up") setPage("Bouquet Now | Sign Up");
    else if (path === "/me" && page !=="Bouquet Now | Profile") setPage("Bouquet Now | Profile");
    else if (path === "/occasion" && page !=="Bouquet Now | Shop") setPage("Bouquet Now | Shop");
    else if (path === "/contact" && page !=="Bouquet Now | Contact") setPage("Bouquet Now | Contact Us");
    else if (path === "/cart" && page !=="Bouquet Now | Checkout") setPage("Bouquet Now | Checkout");
    else if (path === "/success" && page !=="Bouquet Now | Success") setPage("Bouquet Now | Success");
    else if (page !=="Bouquet Now") setPage("Bouquet Now");
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
              <Route path="/" element={<Home setPage={setPage}/>} />
              <Route path="/login" element={<Login setPage={setPage} />} />
              <Route path="/signup" element={<Signup setPage={setPage}/>} />
              <Route path="/me" element={<Profile />} />
              <Route path="/users/:id" element={<Profile />} />
              <Route path="/occasion" element={<Occasion />} />
              <Route path="/occasion/:id" element={<BouquetList />} />
              <Route path="/bouquet/:id" element={<Bouquet />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart setPage={setPage}/>} />
              <Route path="/success" element={<Success setPage={setPage}/>} />
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
