import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from 'recharts';
import './FinanceChart.css';

const FinanceChart = ({ data }) => {
  const formattedData = data.map((entry) => ({
    ...entry,
    date: new Date(entry.date).toLocaleDateString(),
    income: parseFloat(entry.income),
    expense: parseFloat(entry.expense),
  }));

  return (
    <div className="finance-chart-section">
      <h2>Finance Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={formattedData}>
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="income" stroke="#4caf50" name="Income" />
          <Line type="monotone" dataKey="expense" stroke="#f44336" name="Expense" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
