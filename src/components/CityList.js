import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CityList.css';
import cities from './cities';



function CityList() {
  const navigate = useNavigate();

  return (
    <div className="city-list">
      <h2 className="title">Popular Locations in India</h2>
      <p className="quotes">Click on a city to explore restaurants</p>
      <div className="city-grid">
        {cities.map(city => (
          <button key={city} className="city-button" onClick={() => navigate(`/restaurants/${city}`)}>
            {city} Restaurants
          </button>
        ))}
      </div>
    </div>
  );
}

export default CityList;
