import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">FinanceTracker</div>

      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">About</a></li>
      </ul>

      <div className="navbar-actions">
        <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle">
          {darkMode ? "🌞" : "🌙"}
        </button>
        <button className="signin-btn">Sign In</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
