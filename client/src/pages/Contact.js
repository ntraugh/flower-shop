import React, { useState } from "react";
import ContactForm from "./ContactForm";
import Header from "../components/Header/index"

function Contact() { 
    return (
        <main>
        <Header />
          <h2>Contact Us</h2>
        <ContactForm />
        </main>
    )
}

export default Contact;