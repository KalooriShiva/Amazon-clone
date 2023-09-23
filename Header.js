import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
import {useStateValue} from "./StateProvider";

function Header() {

    const [{basket},dispatch] = useStateValue();
  return (
    <div class="navbar">
            <div class="nav-logo border">
                <Link to = "/" className = "header__link">
                <div class="logo">

                </div>
                </Link>
            </div>
            <div class="nav-address border">
                <p class = "add-first">Deliver to</p>
                <div class="add-icon">
                    <i class="fa-solid fa-location-dot"></i>
                    <p class = "add-second">India</p>
                </div>
            </div>
            <div class="nav-search">
                <select class="search-select">
                    <option>All</option>
                </select>
                <input placeholder="Search Amazon" class="search-input"></input>
                <div class="search-icon">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                
            </div>
            <Link to = "/login" className = "header__link">
            <div class="nav-signin border">
                <p><span>Hello, sign in</span></p>
                <p class="nav-second">Account & Lists</p>
            </div> 
            </Link>
            <Link to = "/" className = "header__link">
            <div class="nav-return border">
                <p><span>Returns</span></p>
                <p class="nav-second">& Orders</p>
            </div>
            </Link>
           <Link to="/checkout" className = "header__link">
            <div class="nav-cart border">
                <i class="fa-solid fa-cart-shopping"></i>
                <span>{basket?.length}</span>
            </div>
            </Link>
    </div>
  )
}

export default Header