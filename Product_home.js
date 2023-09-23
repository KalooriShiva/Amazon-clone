import React from 'react'
import "./Product_home.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
function Product_home(props) {
  if(props.title === 'Clothes'){
    return (
      <div class="box">
          <div class="box-content">
              <h2>{props.title}</h2>
              <img class="box-image" src = {props.image} alt =""/>
              <Link to = "/product" className = "product__link"><p>See more</p></Link>
          </div>
      </div>
    );
    
  }
  else{
    return (
      <div class="box">
          <div class="box-content">
              <h2>{props.title}</h2>
              <img class="box-image" src = {props.image} alt =""/>
              <Link to = "/product" className = "product__link"><p>See more</p></Link>
          </div>
      </div>
    );
  }
}

export default Product_home