import React from 'react';
import './Auth.css';

const Register = () => {
  return (
    <div className="auth-container">
      <form className="auth-form">
        <h2>Register</h2>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Register</button>
        <p className="auth-switch">Already have an account? <a href="/login">Login</a></p>
      </form>
    </div>
  );
};

export default Register;
