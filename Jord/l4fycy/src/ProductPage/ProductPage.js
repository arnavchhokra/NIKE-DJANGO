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

          <div className="ProductPage-rows">
            <Products />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
