import React from 'react';
import './Auth.css';

const Login = () => {
  return (
    <div className="auth-container">
      <form className="auth-form">
        <h2>Login</h2>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <p className="auth-switch">Don't have an account? <a href="/register">Register</a></p>
      </form>
    </div>
  );
};

export default Login;
