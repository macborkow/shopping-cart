import React, { useState, useEffect } from 'react';
import "../App.css";
import Item from "./Item";
import Cart from "./Cart";

const Shop = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (name) => {
    setCartItems([...cartItems, props.items.find(item => item.name===name)]);
  }

  return (
    <div>
    <div className="shop">
      <h3>Check it out:</h3>
      {props.items.map((item, id) => (
        <Item key={id} name={item.name} url={item.url} click={addToCart}/>
      ))}
     
    </div>
    <Cart itemsInCart={cartItems}/>
    </div>

  );
};

export default Shop;
