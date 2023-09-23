import React, { useState } from 'react'
import { useStateValue } from './StateProvider';
import Product from './Product';
import './Product_page.css'
function Product_page() {
    const[{basket}] = useStateValue();
  return (
    <div className='product_page'>
        <img className='product_ad' src= {require("./logos/amazon_ad.gif")} alt = ""/>
        <h2 className='product_showtag'>Products</h2>
        <Product 
            id = "1"
            title = "Amazon Brand - Symbol Men's Casual Shirt, Regular fit 100% cotton Pack of 4 shirts are designed in full collar"
            image = "https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2023/Aug_GW/mencombo_low_1_1._SY304_CB599010188_.jpg"
            price = {3999}
            rating = {3}
        />
        <Product 
            id = "1"
            title = "Amazon Brand - Symbol Men's Casual Shirt, Regular fit 100% cotton Pack of 4 shirts are designed in full collar"
            image = "https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2023/Aug_GW/mencombo_low_1_1._SY304_CB599010188_.jpg"
            price = {3999}
            rating = {3}
        />
        <Product 
            id = "1"
            title = "Amazon Brand - Symbol Men's Casual Shirt, Regular fit 100% cotton Pack of 4 shirts are designed in full collar"
            image = "https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2023/Aug_GW/mencombo_low_1_1._SY304_CB599010188_.jpg"
            price = {3999}
            rating = {3}
        />
        <Product 
            id = "1"
            title = "Amazon Brand - Symbol Men's Casual Shirt, Regular fit 100% cotton Pack of 4 shirts are designed in full collar"
            image = "https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2023/Aug_GW/mencombo_low_1_1._SY304_CB599010188_.jpg"
            price = {3999}
            rating = {3}
        />
        <Product 
            id = "1"
            title = "Amazon Brand - Symbol Men's Casual Shirt, Regular fit 100% cotton Pack of 4 shirts are designed in full collar"
            image = "https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2023/Aug_GW/mencombo_low_1_1._SY304_CB599010188_.jpg"
            price = {3999}
            rating = {3}
        />
        <Product 
            id = "1"
            title = "Amazon Brand - Symbol Men's Casual Shirt, Regular fit 100% cotton Pack of 4 shirts are designed in full collar"
            image = "https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2023/Aug_GW/mencombo_low_1_1._SY304_CB599010188_.jpg"
            price = {3999}
            rating = {3}
        />
        <Product 
            id = "1"
            title = "Amazon Brand - Symbol Men's Casual Shirt, Regular fit 100% cotton Pack of 4 shirts are designed in full collar"
            image = "https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2023/Aug_GW/mencombo_low_1_1._SY304_CB599010188_.jpg"
            price = {3999}
            rating = {3}
        />
        <Product 
            id = "1"
            title = "Amazon Brand - Symbol Men's Casual Shirt, Regular fit 100% cotton Pack of 4 shirts are designed in full collar"
            image = "https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2023/Aug_GW/mencombo_low_1_1._SY304_CB599010188_.jpg"
            price = {3999}
            rating = {3}
        />
        <Product 
            id = "1"
            title = "Amazon Brand - Symbol Men's Casual Shirt, Regular fit 100% cotton Pack of 4 shirts are designed in full collar"
            image = "https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2023/Aug_GW/mencombo_low_1_1._SY304_CB599010188_.jpg"
            price = {3999}
            rating = {3}
        />
        <Product 
            id = "1"
            title = "Amazon Brand - Symbol Men's Casual Shirt, Regular fit 100% cotton Pack of 4 shirts are designed in full collar"
            image = "https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2023/Aug_GW/mencombo_low_1_1._SY304_CB599010188_.jpg"
            price = {3999}
            rating = {3}
        />
        <Product 
            id = "1"
            title = "Amazon Brand - Symbol Men's Casual Shirt, Regular fit 100% cotton Pack of 4 shirts are designed in full collar"
            image = "https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2023/Aug_GW/mencombo_low_1_1._SY304_CB599010188_.jpg"
            price = {3999}
            rating = {3}
        />

    </div>
  )
}

export default Product_page