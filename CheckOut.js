import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
function CheckOut() {
  const [{basket}] =  useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img className='checkout_ad' src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/bank/august/hdfc/one/update/HDFC_PC.jpg' alt =""/>
        {basket?.length === 0 ?(
          <div>
            <h1 className='checkout_title'>Your cart is empty</h1>
          </div>
        ):(
          <div>
            <h1 className='checkout_title'>Your Cart</h1>
            {basket.map(item =>(
              <CheckoutProduct
                id = {item.id}
                title = {item.title}
                image = {item.image}
                price = {item.price}
                rating = {item.rating}
                />
            ))}
          </div>
        )}
      </div>
      <div>
        {basket.length>0 && (
          <div className='checkout_right'>
            <Subtotal/>
          </div>
          )}
      </div>
    </div>

  )
}

export default CheckOut