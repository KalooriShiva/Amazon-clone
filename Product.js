import React, { useState }from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'
function Product(props) {
  const [{basket},dispatch] = useStateValue();
  const addToBasket = () =>{
    // ADD item to basket;
    dispatch({
        type:'ADD_TO_BASKET',
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
    
    <div class="product">
        <img class="product_image" src = {props.image} alt =""/>
        <div className='product_info back_color'>
            <h2 className='product_title back_color'>{props.title}</h2>
            <p className='product_price back_color'>
                <small className='back_color'>₹</small>
                <strong className='back_color'>{props.price}</strong>
            </p>
            <div className='product_rating back_color'>
                {Array(props.rating)
                    .fill()
                    .map((_,i) => (
                        <p className='back_color'>⭐</p>
                    ))}
            </div>
            <button onClick = { addToBasket} className='product_button back_color'>Add to Cart</button>
        </div>
    
    </div>
  )
}

export default Product