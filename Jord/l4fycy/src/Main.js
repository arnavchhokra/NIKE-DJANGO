import React from 'react'
import App from './App'
import './Main.css'
import ProductPage from './ProductPage/ProductPage'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Cart from './Cart/Cart'
import Signup from './User/Signup'
import SingleProductPage from './SingleProductPage/SingleProductPage'

function Main() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route exact path="/Products" element={<ProductPage />}></Route>
        <Route exact path="/Cart" element={<Cart />}></Route>
        <Route exact path="/Signup" element={<Signup />}></Route>
        <Route exact path="/Products/:id" element={<SingleProductPage />}></Route>
      </Routes>
    </Router>
  )
}

export default Main
