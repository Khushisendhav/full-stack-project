import React from 'react';
import './Features.css';

function Features() {
  return (
    <section className="features">
      <h2>Why Choose Us?</h2>
      <div className="feature-boxes">
        <div className="box">
          <h4>Potential ROI</h4>
          <p>We provide expert consultation and top-notch service.</p>
        </div>
        <div className="box">
          <h4>Design</h4>
          <p>Innovative and modern designs tailored to your needs.</p>
        </div>
        <div className="box">
          <h4>Marketing</h4>
          <p>Proven marketing strategies to sell properties faster.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
