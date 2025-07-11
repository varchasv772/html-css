import React from 'react';


import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CityList from './components/CityList';
import Login from './pages/Login';
import SignupPage from './pages/SignupPage';
import RestaurantList from './components/RestaurantList';

import MenuPage from "./components/MenuPage";
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<CityList />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/restaurants/:city" element={<RestaurantList />} />
        <Route path="/city/:cityName/:restaurantName" element={<MenuPage />} />
       
      </Routes>
    </Router>
   
    <Footer/>
  </>
  
 
  );
}

export default App;