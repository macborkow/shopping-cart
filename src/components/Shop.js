import React, { useState, useEffect } from "react";
import "../App.css";
import Item from "./Item";
import Cart from "./Cart";

const Shop = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (name, quantity) => {
    let noNewItem = false;

    let temp = cartItems.map((item) => {
      if (item.details.name === name) {
        item.quantity += quantity;
        noNewItem = true;
      }
      return item;
    });

    if (noNewItem) {
      setCartItems(temp);
    } else
      setCartItems([
        ...temp,
        { details: props.items.find((item) => item.name === name), quantity },
      ]);
  };

  return (
    <div>
      <div className="shop">
        <h3>Check it out:</h3>
        {props.items.map((item, id) => (
          <Item
            key={id}
            name={item.name}
            url={item.url}
            price={item.price}
            click={addToCart}
          />
        ))}
      </div>
      <Cart itemsInCart={cartItems} />
    </div>
  );
};

export default Shop;
