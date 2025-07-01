import React from 'react';
import './Realtor.css';
import Ellipse11 from '../assets/image/Ellipse 11.svg'
import Ellipse12 from '../assets/image/Ellipse 12.svg';
import Ellipse13 from '../assets/image/Ellipse 13.svg'

const Realtor = () => {
  return (
    <section className="realtor-section">
      <div className="realtor-text">
        <h2>Not Your Average Realtor</h2>
        <p>
          Real estate isn’t just about property, it’s about connecting people and delivering meaningful value. We are not just realtors. We are problem solvers, strategists, and your trusted advisors.
        </p>
      </div>

      <div className="realtor-images">
        <div className="main-img">
          <img src={Ellipse11} alt="Main Realtor" />
        </div>
        <div className="side-imgs">
          <img src={Ellipse12} alt="Client Discussion" />
          <img src={Ellipse13} alt="Presentation" />
        </div>
      </div>
    </section>
  );
};

export default Realtor;