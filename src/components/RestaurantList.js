import React from 'react';
import { Link,useParams } from 'react-router-dom';
import RestaurantData from './RestaurantData';



import './RestaurantList.css';


function RestaurantList() {
  const { city } = useParams();
  const restaurants = RestaurantData[city] || [];

  return (
    <div className="restaurant-container">
      <h2>Restaurants in {city}</h2>
      <p>A taste you’ll never forget.</p>
      <div className="restaurant-grid">
        {restaurants.map((rest, idx) => (
        <>
       
          <div className="restaurant-card" key={idx}>
            
            <img src={rest.image} alt={rest.name} />
            <h3>{rest.name}</h3>
            <p>{rest.cuisines}</p>
            <p>{rest.price}</p>
            <div className="rest-bottom">
              <span className="rating">{rest.rating}⭐</span>
              <span className="distance">{rest.distance}</span>
            </div>
           
          </div>
        
          </>
        
       
        ))}
      </div>
    </div>
  );

}

export default RestaurantList;
