import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const NotePage = ({ match, history }) => {
  let ProductId = match.params.id
  let [Products, setProduct] = useState(null)

  useEffect(() => {
    getProducts()
  }, [ProductId])

  let getProducts = async () => {

    try{
      let response = await fetch(`/Products/Products/${ProductId}/`)
      let data = await response.json()
      setProduct(data)
    }catch(e)
    {
      console.log(e)
    }

  }

  return <div className="note">{Products.desc}</div>
}

export default NotePage
