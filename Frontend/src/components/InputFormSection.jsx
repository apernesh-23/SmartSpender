import React, { useState } from 'react';
import './InputFormSection.css';

const InputFormSection = ({ onFormSubmit }) => {
  const [income, setIncome] = useState('');
  const [expense, setExpense] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!income || !expense || !date) return;

    const newEntry = {
      income,
      expense,
      date,
    };

    onFormSubmit(newEntry);

    // Reset fields
    setIncome('');
    setExpense('');
    setDate('');
  };

  return (
    <section className="input-form-section">
      <h2>Enter Financial Data</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Income"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Expense"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default InputFormSection;
