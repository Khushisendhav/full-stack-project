import './ContactForm.css';
import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    city: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting contact form:', form);
    // Will send data to backend
  };

  return (
    
    <section>

      <section className="contact">
      <h2>Let's Talk</h2>
      <p>Contact us today and get a free consultation for your real estate project.</p>
    </section>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input name="name" placeholder="Full Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="mobile" placeholder="Mobile Number" onChange={handleChange} />
        <input name="city" placeholder="City" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>

      
    </section>
  );
};

export default ContactForm;
