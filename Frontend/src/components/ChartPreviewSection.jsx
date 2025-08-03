import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar
} from 'recharts';
import './ChartPreviewSection.css';

const lineData = [
  { name: 'Jan', balance: 4000 },
  { name: 'Feb', balance: 3000 },
  { name: 'Mar', balance: 2000 },
  { name: 'Apr', balance: 2780 },
  { name: 'May', balance: 1890 },
  { name: 'Jun', balance: 2390 },
  { name: 'Jul', balance: 3490 }
];

const barData = [
  { name: 'Food', amount: 400 },
  { name: 'Rent', amount: 2400 },
  { name: 'Travel', amount: 1200 },
  { name: 'Shopping', amount: 800 }
];

const ChartPreviewSection = () => {
  return (
    <section className="chart-preview-section">
      <div className="chart-preview-container">
        <h2 className="chart-title">Visualize Your Financial Journey</h2>
        <p className="chart-subtext">Our intuitive charts help you track income, spending & savings with clarity.</p>

        <div className="chart-wrapper">
          <div className="chart-box">
            <h4>Monthly Balance Overview</h4>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="balance" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-box">
            <h4>Expense Breakdown</h4>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="amount" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChartPreviewSection;
