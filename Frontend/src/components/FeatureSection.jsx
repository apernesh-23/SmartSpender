// src/components/FeaturesSection.jsx
import React from 'react';
import './FeatureSection.css';

const features = [
  {
    title: "Smart Expense Tracking",
    description: "Track your daily expenses with AI-assisted categorization.",
  },
  {
    title: "Budget Management",
    description: "Set budgets and get alerts when you're close to overspending.",
  },
  {
    title: "Data Visualizations",
    description: "Understand your finances with clean, beautiful charts.",
  },
  {
    title: "Safe & Secure",
    description: "Your data is encrypted and stored securely.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <h2>Why Choose Our Tracker?</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
