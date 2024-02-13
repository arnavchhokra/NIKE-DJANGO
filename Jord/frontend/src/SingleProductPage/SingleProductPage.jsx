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

    try{
      let response = await fetch(`https://nike-uoc4.onrender.com/Products/Products/${ProductId}/`)
      let data = await response.json()
      console.log(data)
      setProducts(data)
    }
    catch(e)
    {
      console.log(e)
    }

  }


  let addCart = async() => {
    console.log("Hi")
    try{
    const authToken = localStorage.getItem('salesToken');
    let response = await fetch(`https://nike-uoc4.onrender.com/User/addcart/${ProductId}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json',
      },
    })
    if (response.status == 201) {
      alert('Product added to Cart')
    } else {
      const error = new Error(response.statusText)
      throw error;
    }
  } catch (err) {
    console.log('err')
    alert("Please login to add to cart")
  }
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
            <button className="SingleProductPage-button" onClick={addCart}>ADD TO CART</button>
          <span className="SingleProductPage-desc">{Products.desc}</span>
        </div>
      </div>
    </div>
  )
}

export default SingleProductPage
