import React, { useState } from "react";
import "../App.css";
import Item from "./Item";

const Cart = (props) => {

  const [cartVisible, setCartVisible] = useState(true);

  const showCartItems = () => {
    setCartVisible(1);
  }

  const hideCartItems = () => {
    setCartVisible(0);
  }

  return (
    <div className="cart" onMouseOver={showCartItems} onMouseOut={hideCartItems}>
      <p>Cart:{` [${props.itemsInCart.length}]`}</p>

      {cartVisible?<div>
        {props.itemsInCart.map((item, id) => (
          <article key={id}>{item.name}</article>
        ))}
      </div>:null}
    </div>
  );
};

export default Cart;
