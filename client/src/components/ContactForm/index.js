import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./ContactForm.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("xdojnzjz");
  if (state.succeeded) {
    return <p>Thanks for reaching out!</p>;
  }
  return (
    <div id="contactForm">
      <form id="formContact" onSubmit={handleSubmit}>
        <label htmlFor="email"></label>
        <input id="emailInput"
          placeholder="Your email"
          type="email"
          name="email"

        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          className="input"
          id="message"
          name="message"
          rows={7}
          maxLength={500}
          placeholder="Your message here"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          // className="btn"
          id="boot"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default ContactForm;
