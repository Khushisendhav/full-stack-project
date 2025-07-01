import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Consultation, Design & Marketing</h1>
        <p>Your trusted partner for real estate solutions.</p>
        <button>Get Started</button>
      </div>
      <div className="hero-form">
        <h3>Get free Consultation</h3>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
         <input type="number" placeholder="Mobile Number" />
         <input type="text" placeholder="Area , City" />
        <button>Get Quick Quote</button>
      </div>
    </section>
  );
}

export default Hero;