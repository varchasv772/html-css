// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>Foodie Express</h2>
      </div>

      <div className="footer-sections">
        <div className="footer-column">
          <h4>ABOUT Foodie Express</h4>
          <ul>
            <li>Who We Are</li>
            <li>Blog</li>
            <li>Work With Us</li>
            <li>Investor Relations</li>
            <li>Report Fraud</li>
            <li>Press Kit</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>ZOMAVERSE</h4>
          <ul>
            <li>Zomato</li>
            <li>Blinkit</li>
            <li>Feeding India</li>
            <li>Hyperpure</li>
            <li>Zomaland</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>FOR RESTAURANTS</h4>
          <ul>
            <li>Partner With Us</li>
            <li>Apps For You</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>LEARN MORE</h4>
          <ul>
            <li>Privacy</li>
            <li>Security</li>
            <li>Terms</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>SOCIAL LINKS</h4>
          <div className="social-icons">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook"></i>
          </div>
          <div className="app-buttons">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" />
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Foodie Express™ Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
