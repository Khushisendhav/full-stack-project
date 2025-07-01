import React from 'react';
import './Realtor1.css';

const Realtor = () => {
  return (
    <section className="realtor-section">
      <div className="realtor-text">
        <h2>Not Your Average Realtor</h2>
        <p>
          Real estate isn't just about selling property. We build meaningful
          client relationships while delivering top-notch solutions tailored
          to your goals and lifestyle.
        </p>
      </div>

      <div className="realtor-images">
        <div className="main-img">
          <img src="/assets/realtor-main.jpg" alt="Main Realtor" />
        </div>
        <div className="side-imgs">
          <img src="/assets/realtor-side1.jpg" alt="Happy Clients" />
          <img src="/assets/realtor-side2.jpg" alt="Realtor Discussion" />
        </div>
      </div>
    </section>
  );
};

export default Realtor;