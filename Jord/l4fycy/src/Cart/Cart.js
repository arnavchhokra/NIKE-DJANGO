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
function Cart(Props) {
  const ProductID = shared()
  console.log(ProductID)
  let [cartproducts, setCartProducts] = useState([])


  useEffect(() => {
    getcart()
  }, [])




  const getcart = async () => {
    try {
      console.log(localStorage.getItem('salesToken'))
      const res = await fetch('http://localhost:8000/User/cart/', {
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
          console.log(error)
        }
    } catch (e) {
      alert('outer error')
      console.log(e)
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
        <div className="Cart-products-rows">
          {
            cartproducts.map((cartproduct, index) => (
<CartProducts ProductId={cartproduct} key={index} />
            ))
          }
        </div>
        <div className="Cart-payment-info">
        <TableContainer>
  <Table variant='simple' size='lg' style={{textAlign:'left', }}>
    <Thead>
      <Tr>
        <Th>Item</Th>
        <Th> Price</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
  </Table>
  <Stat style={{border: '1px solid grey', marginTop:'10px', padding:'10px', paddingTop:'5px', borderRadius:'5px'}}>
  <StatLabel>Total Charges</StatLabel>
  <StatNumber>$0.00</StatNumber>
  <StatHelpText> Expected Delivery: Feb 12 - Feb 28</StatHelpText>
</Stat>
</TableContainer>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
