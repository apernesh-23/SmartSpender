import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <section className="dashboard">
      <h2>Dashboard Overview</h2>

      <div className="cards">
        <div className="card income">
          <h3>Total Income</h3>
          <p>₹50,000</p>
        </div>
        <div className="card expenses">
          <h3>Total Expenses</h3>
          <p>₹20,000</p>
        </div>
        <div className="card balance">
          <h3>Current Balance</h3>
          <p>₹30,000</p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
