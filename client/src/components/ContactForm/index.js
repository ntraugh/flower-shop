
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "./ContactForm.css";


function ContactForm() {
  const [state, handleSubmit] = useForm("xdojnzjz");
  if (state.succeeded) {
      return <p>Thanks for reaching out!</p>;
  }
  return (
      <form class="mb-3" onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        className="formControll"
        placeholder="name@example.com"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        className="input"
        id="message"
        name="message"
        rows={7}
        placeholder="Your message here"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button class="btn" id='boot' type="submit"  disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
export default ContactForm;
