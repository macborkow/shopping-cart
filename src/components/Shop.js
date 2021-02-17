import React from "react";
import "../App.css";
import Item from "./Item";
import Cart from "./Cart";

const Shop = (props) => {
  return (
    <div>
    <div className="shop">
      <h3>Check it out:</h3>
      {props.items.map((item) => (
        <Item name={item.name} url={item.url} />
      ))}
     
    </div>
    <Cart />
    </div>

  );
};

export default Shop;
