import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Shop from "./components/Shop";

const App = () => {
  const items = [
    {
      name: "Banana",
      url: "https://lh3.googleusercontent.com/proxy/KgcI6p1q2tkaRjfkM9UCpdXb0n0qhDsSs9c4zl9sWR_hBjKsg-mp5aigUSo22hJFUWE0KMDAXbpwxHG2OT_XKmMGTtPTdIscJo2ayibgDEh9bFhnykz8c1xBNCtyCKCbK-scbIQ",
      price: 0.80,
    },
    {
      name: "Strawberries",
      url: "https://lh3.googleusercontent.com/proxy/9klm6CRbIxp0CaMedwnqK2BwcFIddqwAntyxseh_9lmkdsf1_qx7_Pm1ujU95idISfiG6n1An213xrf-qStfHOhG40rJYeIpzDIiS0X9ofCkUWB28MucOXZzLhCoBJ_h9G2ahw",
      price: 1.20,
    },
    {
      name: "Blueberries",
      url: "https://lh3.googleusercontent.com/proxy/V74VlL-1D0XQ9Nm9UmowIGIKtTKnuCc4P0BiToqbaM3yVxre9XHYML5ptiOzkWgjOWv-4psXoHJEyCqW3808xRNkWRJYjgtDnMEiTvWd0P50G1Oedd_Cq3YT",
      price: 2.20,
    },
    {
      name: "Pineapple",
      url: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c184.png",
      price: 1.75,
    },
    {
      name: "Watermelon",
      url: "https://lh3.googleusercontent.com/proxy/_UsxS8GRh4MmnNNfLyNU3S6l17cc3RojZUnNY6SrNaPmrHGIE1iEytdWBe0IXwA6DZCcni4UPSYKhbyJhGv-59c4VL6VS0cd6yniOdWdng48MMZhoX4emUZfa94G73DgzMw",
      price: 2.90,
    },
    {
      name: "Puppy",
      url: "https://lh3.googleusercontent.com/proxy/t3FWJ8d1uN07knDj7T8yZ9NN32kq1Uq2XOr3BudxtcC78Oh4nwohwelaLA8jU7eVl6Xbw1voDkXW4Cz_qM1V9t9mIXfDxCyQOKJSgB9dzraf_fpQA9lx",
      price: 199.99,
    },
  ];

  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route exact path="/shopping-cart/">
            <div className="noComponent">
              <p>Buy our stuff.</p>
            </div>
          </Route>
          <Route path="/shopping-cart/about">
            <div className="noComponent">
              <p>
                What do you mean? Nothing <code>shady</code> about it.
              </p>
            </div>
          </Route>
          <Route path="/shopping-cart/shop">
            <Shop items={items} />
          </Route>
          <Route path="/:whatever">
            <div className="noComponent">
              <p>Page not found</p>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
