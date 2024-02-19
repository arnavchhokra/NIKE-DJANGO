import React from 'react'
import './Products.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  let [Products, setProducts] = useState([])
  const [loading, setLoading] = useState(true); // State to track loading status


  useEffect(() => {
    getProducts()
  }, [])

  let getProducts = async () => {
    try{
      let response = await fetch('https://nike-uoc4.onrender.com/Products/Products/')
      let data = await response.json()
      setProducts(data)
    }
    catch(e)
    {
      console.log(e)
    }
    finally {
      setLoading(false); // Set loading to false after fetching is done
    }

  }

  return (
    <div className="products-home" >
      {loading ? ( // Render loader if loading is true
            <div>Loading...</div>
          ) : (
            <>
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
       </>
          )}
    </div>
  )
}

export default Products
