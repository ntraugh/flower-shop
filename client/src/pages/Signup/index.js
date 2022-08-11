import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

import "./Signup.css"

import Auth from '../../utils/auth';

const Signup = ({ setPage }) => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  const renderForm = () => {
    if (data) {
      return (
      <p>
        Success! You may now head{' '}
        <Link to="/">back to the homepage.</Link>
      </p>
      )
    } 
    return (
      <form id="signup-form" onSubmit={handleFormSubmit}>
        <input
          placeholder="Your username"
          name="username"
          type="text"
          value={formState.name}
          onChange={handleChange}
        />
        <input
          placeholder="Your email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
        />
        <input
          placeholder="******"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
        />
        <button type="submit">
          Submit
        </button>
      </form>
    );
  };

  return (
    <main id="signup-main">
      <h2>Sign Up</h2>
      <div>
        {renderForm()}
        {<p style={{paddingTop: "1rem", fontWeight: "bold"}}>
          <Link to="/login" onClick={() => setPage("Bouquet Now | Login")}>
            Already Signed Up?
          </Link>
        </p>}
        {error && <div>{error.message}</div>}
      </div>
    </main>
  );
};

export default Signup;
