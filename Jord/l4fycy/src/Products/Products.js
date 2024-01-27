import React from 'react'
import './Products.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  let [Products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  let getProducts = async () => {
    try{
      let response = await fetch('http://localhost:8000/Products/Products/')
      let data = await response.json()
      setProducts(data)
    }
    catch(e)
    {
      console.log(e)
    }

  }

  return (
    <div className="products-home" >
      {Products.map((Products, index) => (
        <div className="Product-container">
          <Link className="Product-link" to={`/Products/${Products.id}`}>
            <div>
              <img className="product-img" src={Products.image}></img>
            </div>
            <div className="product-name">{Products.name}</div>
            <div className="product-price">${Products.price}</div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Products
