import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider'
function CheckoutProduct(props) {
  const [{basket},dispatch] = useStateValue();
  const RemoveFromBasket = () =>{
    // ADD item to basket;
    dispatch({
        type:'REMOVE_FROM_BASKET',
        item:{
            id : props.id,
            title : props.title,
            image: props.image,
            price: props.price,
            rating: props.rating,
        },
    });
  };
  return (
    
    <div class="checkout_product">
        <img class="checkout_product_image" src = {props.image} alt =""/>
        <div className='checkout_product_info co_back_color'>
            <h2 className='checkout_product_title co_back_color'>{props.title}</h2>
            <p className='checkout_product_price co_back_color'>
                <small className='co_back_color'>₹</small>
                <strong className='co_back_color'>{props.price}</strong>
            </p>
            <div className='checkout_product_rating co_back_color'>
                {Array(props.rating)
                    .fill()
                    .map((_,i) => (
                        <p className='co_back_color'>⭐</p>
                    ))}
            </div>
            <button onClick = {RemoveFromBasket} className='checkout_product_button co_back_color'>Remove from Cart</button>
        </div>
    
    </div>
  )
}

export default CheckoutProduct