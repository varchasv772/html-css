import React from 'react';
import './Login.css';

const LoginModal = ({ onClose }) => {
  return (
    <div className="login-overlay">
      <div className="login-modal">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Login</h2>

        <input
          type="text"
          placeholder="+91  Phone"
          className="input"
        />
        <button className="otp-btn">Send One Time Password</button>

        <div className="divider">or</div>

        <button className="email-btn">
          <span role="img" aria-label="mail">📧</span> Continue with Email
        </button>

        <button className="google-btn">
        
          Sign in with Google
        </button>

        <p className="signup-link">
          New to Foodie Express? <a href="#">Create account</a>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
