import React from 'react'
import './CartProducts.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Products from '../Products/Products'
import { ChakraProvider } from '@chakra-ui/react'
import { Text, Heading, Card, CardHeader, CardBody, CardFooter, Stack, Button, Image } from '@chakra-ui/react'
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'

const CartProducts = (Props) => {
  const { ProductId } = Props;
  console.log(ProductId)
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

  let removeCart = async() => {
    console.log("remover on")
    try{
    const authToken = localStorage.getItem('salesToken');
    console.log(ProductId, "is the productID")
    let response = await fetch(`https://nike-uoc4.onrender.com/User/removecart/${ProductId}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json',
      },
    })
    if (response.status == 200) {
      alert('Product removed from Cart')
    } else {
      const error = new Error(response.statusText)
      throw error;
    }
  } catch (err) {
    console.log('err')
    alert(err)
    console.error(err)
  }
}



  return (
    <ChakraProvider >
    <Card
    direction={{ base: 'column', sm: 'row'}}
    style={{marginTop:'20px', alignItems:'center'}}
    overflow='hidden'
    variant='outline'
  >
    <Image
      objectFit='cover'
      maxW={{ base: '100%', sm: '200px' }}
      src={Products.image}
      alt='Caffe Latte'
    />

    <Stack>
      <CardBody>
        <Heading size='md'>{Products.name}</Heading>

        <Text py='2'>
          ${Products.price}
        </Text>
      </CardBody>
      <CardFooter>
        <button onClick={removeCart}>Remove</button>
      </CardFooter>
    </Stack>
  </Card>
  </ChakraProvider>
  )
}
export default CartProducts
