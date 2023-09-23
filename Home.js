import React from "react";
import "./Home.css"
import Product_home from "./Product_home";
function Home() {
  return (
    <div className='home'>
        <img
            className= "home__image"
            src = "https://m.media-amazon.com/images/I/71voIqxkUPL._SX3000_.jpg"
            alt = "Home image"
        />
        <div class="shop-section">
          <Product_home
            id = "1"
            title = "Clothes"
            image = "https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2023/Aug_GW/mencombo_low_1_1._SY304_CB599010188_.jpg"
          />
          <Product_home
            id = "2"
            title = "Health & Personal Care"
            image = {require('./logos/box2_image.jpg')}
          />
          <Product_home
            id = "1"
            title = "Furniture"
            image = {require('./logos/box3_image.jpg')}
          />
          <Product_home
            id = "1"
            title = "Electronics"
            image = {require('./logos/box4_image.jpg')}
          />
          <Product_home
            id = "1"
            title = "Beauty picks"
            image = {require('./logos/box5_image.jpg')}
          />
          <Product_home
            id = "1"
            title = "New Arrival in Toys"
            image = {require('./logos/box7_image.jpg')}
          />
          <Product_home
            id = "1"
            title = "Discover fashion Trends"
            image = {require('./logos/box8_image.jpg')}
          />
          <Product_home
            id = "1"
            title = "PetCare"
            image = {require('./logos/box6_image.jpg')}
          />
        </div>
        
    </div>
  )
}

export default Home 