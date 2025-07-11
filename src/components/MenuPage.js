import React from "react";
import { useParams } from "react-router-dom";
import restaurantData from "./RestaurantData";
import "./MenuPage.css";

const MenuPage = () => {
  const { cityName, restaurantName } = useParams();

  const restaurants = restaurantData[cityName];
  const restaurant = restaurants?.find(r => r.name === restaurantName);

  if (!restaurant) {
    return <h2>Restaurant not found.</h2>;
  }

  return (
    <div className="menu-container">
      <h1>{restaurant.name}</h1>
      <p><strong>Cuisines:</strong> {restaurant.cuisines}</p>
      <h2>Menu</h2>

      <div className="menu-grid">
        {restaurant.menu.map((item, index) => (
          <div className="menu-card" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
