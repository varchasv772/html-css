import React from 'react';
import { Link } from 'react-router-dom';
import './Food.css';

function Header() {
  return (
    <header className="food-header">
      <div className="nav-right">
        
        <a href="/login" className="nav-btn">Log in</a>
        <a href="/signup" className="nav-btn">Sign up</a>
      </div>
      

      <div className="center-content">
        <h1 className="main-title">Foodie Express</h1>
        <p className="subtitle">
          Find the best restaurants, cafés<br/> and bars in India
        </p>
      </div>
    </header>
  );
}

export default Header;
