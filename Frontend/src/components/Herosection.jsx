import React from 'react';
import './HeroSection.css'; // Plain CSS file

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          AI-Powered <span>Finance Tracker</span>
        </h1>
        <p className="hero-description">
          Track expenses, manage budgets, and unlock insights with an intelligent and secure dashboard.
        </p>
        <button className="hero-button">Get Started</button>
      </div>
      <div className="hero-image">
        <img src="/img1.svg" alt="Finance Illustration" />
      </div>
    </section>
  );
};

export default HeroSection;
