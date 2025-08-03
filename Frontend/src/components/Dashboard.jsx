import React, { useState } from 'react';
import InputFormSection from './InputFormSection';
import FinanceChart from './FinanceChart';

const Dashboard = () => {
  const [entries, setEntries] = useState([]);

  const handleFormSubmit = (newEntry) => {
    setEntries((prev) => [...prev, newEntry]);
  };

  return (
    <>
      <InputFormSection onFormSubmit={handleFormSubmit} />
      
      {/* Chart tabhi dikhe jab entries me kuch data ho */}
      {entries.length > 0 && <FinanceChart data={entries} />}
    </>
  );
};

export default Dashboard;
