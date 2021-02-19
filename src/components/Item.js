import React, { useState } from "react";
import "../App.css";

const Item = (props) => {
  const [quantity, setQuantity] = useState(1);

  const changeQuantity = (delta) => {
    delta === 0
      ? setQuantity(1)
      : setQuantity(quantity + delta > 0 ? quantity + delta : quantity);
  };

  return (
    <div className="item">
      <h2>{props.name}</h2>
      <img src={props.url} alt=""></img>
      <div className="buyMenu">
        <button
          onClick={() => {
            props.click(props.name, quantity);
            changeQuantity(0);
          }}
        >
          Add to cart
        </button>
        <br></br>
        <button
          onClick={() => {
            changeQuantity(-1);
          }}
        >
          -
        </button>
        <span style={{ width: "15%", textAlign: "center", margin: "auto" }}>
          {quantity}
        </span>
        <button
          onClick={() => {
            changeQuantity(+1);
          }}
        >
          +
        </button>
        <p style={{ margin: "0" }}>Price:{props.price.toFixed(2)}$</p>
      </div>
    </div>
  );
};

export default Item;
