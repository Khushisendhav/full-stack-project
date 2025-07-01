import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    // Send email to backend
  };

  return (
    <section>
      <h2>Subscribe to our Newsletter</h2>
      <form onSubmit={handleSubscribe} className="newsletter">
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default Newsletter;
