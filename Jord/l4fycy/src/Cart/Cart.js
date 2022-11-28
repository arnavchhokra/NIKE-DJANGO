import React from 'react'
import Nav from '../Navigation/Nav'
import './Cart.css'

import CartProducts from '../CartProducts/CartProducts'
import shared from '../SingleProductPage/SingleProductPage'

function Cart(Props) {
  const ProductID = shared()
  console.log(ProductID)

  return (
    <div className="Cart-Home">
      <div className="Cart-Container">
        <Nav />

        <div className="Cart-products-rows">
          <CartProducts ProductId={ProductID} />
        </div>
        <div className="Cart-payment-info">
          <div className="Cart-subtotal">
            <span className="Cart-subtotal-Subtotal">Subtotal</span>
            <span className="Cart-subtotal-price">$235.15</span>
          </div>
          <div className="Cart-shipping">
            <span className="cart-shipping-Shipping">Shipping</span>
          </div>
          <div className="Cart-total">
            <span className="cart-total-Total">Total</span>
            <span className="cart-total-Price">$235.15</span>
          </div>
          <button className="Cart-checkout-btn">Proceed to checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
