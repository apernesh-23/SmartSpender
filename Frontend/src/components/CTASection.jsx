// src/components/CTASection.jsx
import React from 'react';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-heading">Ready to take control of your finances?</h2>
        <p className="cta-subheading">Start tracking and managing your money effortlessly today.</p>
        <button className="cta-button">Get Started Now</button>
      </div>
    </section>
  );
};

export default CTASection;
