// src/pages/SignupPage.js
import React, { useState } from 'react';
import './SignupPage.css';

function SignupPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify({ username, password }));
    alert('Signup successful!');
    // You can redirect to login or homepage here
  };

  return (
    <div className="signup-overlay">
      <div className="signup-modal">
        <button className="close-button" >×</button>
        <h2>Sign up</h2>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <label className="checkbox-container">
          <input type="checkbox" />
          <span>
            I agree to Foodie Express’s <a href="#">Terms of Service</a>, <a href="#">Privacy Policy</a> and <a href="#">Content Policies</a>
          </span>
        </label>
        <button className="create-btn">Create account</button>
        <div className="divider">or</div>
        <button className="google-btn">
          
          Sign in with Google
        </button>
        <p className="login-link">Already have an account? <a href="#">Log in</a></p>
      </div>
    </div>
  );
}

export default SignupPage;
