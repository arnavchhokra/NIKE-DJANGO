import React from 'react'
import App from './App'
import './index.css'
import ProductPage from './ProductPage/ProductPage'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Cart from './Cart/Cart'
import Signup from './User/Signup'
import Login from './User/Login'
import SingleProductPage from './SingleProductPage/SingleProductPage'
import Profile from './User/Profile'

function Rout() {
  const login_api = async (email, password, success, fail) => {
    const response = await fetch(`https://nike-uoc4.onrender.com/User/api/token/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const text = await response.text();
    if (response.status === 200) {
      console.log("success", JSON.parse(text));
      success(JSON.parse(text));
    } else {
      console.log("failed", text);
      Object.entries(JSON.parse(text)).forEach(([key, value]) => {
        fail(`${key}: ${value}`);
      });
    }
  };

  const signup_api = async (name, email, password, password2, success, fail) => {
    // Check if the passwords match
    if (password !== password2) {
      fail("password2: Passwords do not match");
      return;
    }

    // Make the API request
    const response = await fetch("https://nike-uoc4.onrender.com/User/User/Register/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        password2: password2,
      }),
    });

    const text = await response.text();

    if (response.status === 201) {
      console.log("success", JSON.parse(text));
      success(JSON.parse(text));
    } else {
      console.log("failed", text);
      Object.entries(JSON.parse(text)).forEach(([key, value]) => {
        fail(`${key}: ${value}`);
      });
    }
  };



  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route exact path="/Products" element={<ProductPage />}></Route>
        <Route exact path="/Cart" element={<Cart />}></Route>
        <Route path="/Profile" element={<Profile />} />
        <Route exact path="/Signup" element={<Signup signup_api={signup_api} />}></Route>
        <Route exact path="/Login" element={<Login  login_api={login_api} />}></Route>
        <Route exact path="/Products/:id" element={<SingleProductPage />}></Route>
      </Routes>
    </Router>
  )
}

export default Rout
