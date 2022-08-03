import React from "react";
import ContactForm from "../components/ContactForm";
import About from "../components/About";
import "../components/ContactForm/ContactForm.css";


function Contact() { 
    return (
        <main>
          <div id="contactUs">
          <h2>Contact Us</h2>
          </div>
          <ContactForm />
          <About />
        </main>
    )
}

export default Contact;