import React from 'react'
import Nav from '../Navigation/Nav'
import './Cart.css'

import CartProducts from '../CartProducts/CartProducts'
import shared from '../SingleProductPage/SingleProductPage'
import { ChakraProvider } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
function Cart() {
  const ProductID = shared()
  console.log(ProductID)
  let [cartproducts, setCartProducts] = useState([])
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    getcart()
  }, [])




  const getcart = async () => {
    try {
      console.log(localStorage.getItem('salesToken'))
      const res = await fetch('https://nike-uoc4.onrender.com/User/cart/', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('salesToken')}`
        }
      })
        if (res.status === 200) {
          const data = await res.json()
          console.log("dubudubu")
          setCartProducts(data.cartproduct)
          console.log(cartproducts)

        } else {
          console.log('error')
        }
    } catch (e) {
      alert('outer error')
      console.log(e)
    } finally {
      setLoading(false);
    }
  }

useEffect(() => {
  console.log(cartproducts);
}, [cartproducts]);


  return (
    <div className="Cart-Home">
      <div className="Cart-Container" >
        <Nav  />
<div style={{display:'flex', justifyContent:'center', width:'100%',gap:'30px',alignItems:'flex-start'}}>
{loading ? ( // Render loader if loading is true
            <div>Loading...</div>
          ) : (
            <>
        <div className="Cart-products-rows">
          {
            cartproducts.map((cartproduct, index) => (
<CartProducts ProductId={cartproduct} key={index} />
            ))
          }
        </div>
        <div className="Cart-payment-info">
        </div>
        </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart
