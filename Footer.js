import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-cta">
        <h2>
          Learn more about our listing process, as well as our
          additional staging and design work.
        </h2>
        <button>Learn More</button>
      </div>

      <div className="footer-main">
        <nav className="footer-nav">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <a href="#">Testimonials</a>
          <a href="#">Contact</a>
        </nav>

        <div className="subscribe">
          <label>Subscribe Us</label>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter Email Address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© All Rights Reserved 2025</p>
        <div className="footer-logo">
          <span>Real</span><span className="highlight">rust</span>
        </div>
        <div className="social-icons">
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
