import React from 'react';
import './Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Happy Clients</h2>
      <div className="testimonial-list">
        <div className="testimonial-card">"Excellent service!"</div>
        <div className="testimonial-card">"Very professional."</div>
        <div className="testimonial-card">"Highly recommended!"</div>
      </div>
    </section>
  );
}

export default Testimonials;