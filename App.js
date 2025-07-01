import React from 'react';
import './App.css';
import Projects from './components/Projects';
import Clients from './components/Clients';
import ContactForm from './components/ContactForm';
import Newsletter from './components/Newsletter';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Realtor from './components/Realtor'; 


function App() {
  return (
    <div className="App">
      <h1 className="main-heading">Welcome to Our Company</h1>
       <Navbar />
       <Hero />
       <Realtor />
         <Features />
          <About />
      <Projects />
     
      {/* <Testimonials /> */}
      <Clients />
      
       {/* <Contact /> */}
       {/* <ContactForm /> */}
      {/* <Newsletter /> */}
      <Footer />

    </div>
  );
}

export default App;
