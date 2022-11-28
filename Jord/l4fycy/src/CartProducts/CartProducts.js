import React from 'react'
import './CartProducts.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Products from '../Products/Products'



const CartProducts = (Props) => {
  const ProductId = Props.id
  console.log(ProductId)
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
    <div className="CartProducts-Home">
      <div className="CartProduct-Conatiner">
        <div className="CartProduct-row">
          <img
            className="CartProduct-image"
            src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cd7e8aa7-462c-4875-93a7-d1f4885b319b/air-force-1-07-lv8-shoes-brM6PM.png"
          />
          <span className="CartProduct-Name">{Products.name}</span>
          <span className="CartProduct-Price">$299</span>
        </div>
      </div>
    </div>
  )
}
export default CartProducts
