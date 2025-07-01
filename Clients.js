import React from 'react';
import './Clients.css';
import img from '../assets/image/Ellipse 28.svg'
import img1 from '../assets/image/Ellipse 29.svg'
import img2 from '../assets/image/Ellipse 31.svg'
// import img from '../assets/image/Ellipse 23.svg'

const Clients = () => {
  const clientData = [
    {
      id: 1,
      name: 'John Doe',
      description: 'Excellent service and great support throughout the process.',
      designation: 'CEO, Tech Corp',
      image: img,
    },
    {
      id: 2,
      name: 'Jane Smith',
      description: 'Professional team, smooth experience. Highly recommended!',
      designation: 'Marketing Head, RealSolutions',
      image: img1,
    },
    {
      id: 3,
      name: 'Michael Brown',
      description: 'They understood exactly what I needed and delivered on time.',
      designation: 'Investor, HomeFund',
      image: img2,
    },
  ];

  return (
    <section className="clients-section">
      <h2>Happy Clients</h2>
      <div className="client-cards">
        {clientData.map((client) => (
          <div className="client-card" key={client.id}>
            <img src={client.image} alt={client.name} />
            <p>"{client.description}"</p>
            <h4>{client.name}</h4>
            <small>{client.designation}</small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
