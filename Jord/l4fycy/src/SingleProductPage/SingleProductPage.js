import React from 'react'
import './SingleProductPage.css'
import Nav from '../Navigation/Nav'
import Products from '../Products/Products'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function shared() {
  const params = useParams()
  let sharedid = params.id
  return sharedid
}

const SingleProductPage = () => {
  const params = useParams()
  let ProductId = params.id
  console.log(ProductId)
  console.log(params)
  let [Products, setProducts] = useState([ProductId])

  useEffect(() => {
    getProducts()
  }, [])

  let getProducts = async () => {
    let response = await fetch(`http://localhost:8000/Products/Products/${ProductId}/`)

    let data = await response.json()
    console.log(data)
    setProducts(data)
  }
          
  return (
    <div className="SingleProductPage-Home">
      <Nav />
      <div className="SingleProductPage-Container">
        <div>
          <img className="SingleProductPage-Mainimg" src={Products.image} />
        </div>
        <div className="SingleProductPage-Content">
          <span className="SingleProductPage-Title">{Products.name}</span>
          <span className="SingleProductPage-Price">${Products.price}</span>
          <Link className="SignleProductPage-Link" to={'/Cart'}>
            <button className="SingleProductPage-button">ADD TO CART</button>
          </Link>
          <span className="SingleProductPage-desc">{Products.desc}</span>
        </div>
      </div>
    </div>
  )
}

export default SingleProductPage
