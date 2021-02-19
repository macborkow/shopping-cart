import React, { useState } from "react";
import "../App.css";

const Cart = (props) => {
  const [cartVisible, setCartVisible] = useState(false);

  const showCartItems = () => {
    setCartVisible(1);
  };

  const hideCartItems = () => {
    setCartVisible(0);
  };

  return (
    <div
      className="cart"
      onMouseOver={showCartItems}
      onMouseLeave={hideCartItems}
    >
      <p>
        Cart:
        {` [${
          props.itemsInCart !== []
            ? props.itemsInCart
                .map((item) => item.quantity)
                .reduce(
                  (accumulator, currentValue) => accumulator + currentValue,
                  0
                )
            : 0
        }] `}
      </p>

      {cartVisible ? (
        <div>
          {props.itemsInCart.map((item, id) => (
            <article
              style={{
                padding: "5px",
                margin: "3px",
                backgroundColor: "black",
                textAlign: "center",
              }}
              key={id}
            >
              {item.details.name}
              {item.quantity > 1 ? ` x ${item.quantity}` : null}
            </article>
          ))}
          <span>
            Total:{" "}
            {` [${
              props.itemsInCart !== []
                ? props.itemsInCart
                    .map((item) => item.details.price * item.quantity)
                    .reduce(
                      (accumulator, currentValue) => accumulator + currentValue,
                      0
                    )
                    .toFixed(2)
                : 0
            }] $`}
          </span>
          <button style={{ margin: "5px", width: "100px" }}>Checkout</button>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
