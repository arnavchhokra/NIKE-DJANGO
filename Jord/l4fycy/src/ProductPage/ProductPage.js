import React from 'react'
import Products from '../Products/Products'
import Navigation from '../Navigation/Nav'
import './ProductPage.css'

function ProductPage() {
  return (
    <div className="ProductPage">
      <div className="ProductPage-Home">
        <div className="Nav-Product">
          <Navigation />
        </div>
        <div className="ProductPage-Container">
          <div className="ProductPage-Search">
            <div className="ProductPage-Input">
              <input className="Product-Search-Input" type="text" placeholder="Search" />
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
            <div class="dropdown">
              <button class="dropbtn">Price</button>
              <div class="dropdown-content">
                <a href="#"> >5000</a>
                <a href="#"> >7000</a>
                <a href="#"> >10000</a>
                <a href="#"> >15000</a>
              </div>
            </div>
            <div class="dropdown">
              <button class="dropbtn">Gender</button>
              <div class="dropdown-content">
                <a href="#">MEN</a>
                <a href="#">WOMEN</a>
              </div>
            </div>
            <div class="dropdown">
              <button class="dropbtn">Shoe Height</button>
              <div class="dropdown-content">
                <a href="#">Low</a>
                <a href="#">Medium</a>
                <a href="#">High</a>
              </div>
            </div>
          </div>

          <div className="ProductPage-rows">
            <Products />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
