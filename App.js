 import React from "react";
import './App.css';
import Home from "./Home";
import  Product_home from "./Product_home";
import CheckOut from "./CheckOut";
import{
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Header from "./Header";
import Product_page from "./Product_page";



function App() {
  return (
  
    <Router>
      <div className="app">
        <Switch>
          
          <Route path = "/checkout">
            <Header/>
            <CheckOut/>
          </Route>
          <Route path = "/product">
            <Header/>
            <Product_page/>
          </Route>
          <Route path = "/login">
            <h1>Login</h1>
          </Route>
          <Route path = "/">
            <Header></Header>
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
