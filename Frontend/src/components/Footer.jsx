import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>FinTrack</h2>
          <p>AI-powered Personal Finance Tracker to help you save smartly & grow wisely.</p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Product</h4>
            <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">Charts</a></li>
              <li><a href="#">Budgeting</a></li>
              <li><a href="#">Reports</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h4>Get Started</h4>
            <ul>
              <li><a href="#">Sign Up</a></li>
              <li><a href="#">Login</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FinTrack. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
