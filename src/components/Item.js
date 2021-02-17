import React from "react";
import "../App.css";

const Item = (props) => {

  return (
      <div className='item'>
        <h2>{props.name}</h2>
        <img src={props.url} alt=''></img>
        <div className='buyMenu'><button>Add to cart</button></div>
      </div>
  );
};

export default Item;
