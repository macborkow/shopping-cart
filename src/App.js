import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Shop from "./components/Shop";

const App = () => {
  const items = [
    {
      name: "Garloid",
      url: "https://i.kym-cdn.com/photos/images/newsfeed/001/952/284/404.jpg",
    },
    {
      name: "Garloid2",
      url: "https://i.kym-cdn.com/photos/images/newsfeed/001/952/284/404.jpg",
    },
    {
      name: "Garloid3",
      url: "https://i.kym-cdn.com/photos/images/newsfeed/001/952/284/404.jpg",
    },
    {
      name: "Garloid4",
      url: "https://i.kym-cdn.com/photos/images/newsfeed/001/952/284/404.jpg",
    },
    {
      name: "Garloid5",
      url: "https://i.kym-cdn.com/photos/images/newsfeed/001/952/284/404.jpg",
    },
    {
      name: "Garloid6",
      url: "https://i.kym-cdn.com/photos/images/newsfeed/001/952/284/404.jpg",
    },
  ];

  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route exact path="/">
            <div className="noComponent">
              <p>Buy our stuff.</p>
            </div>
          </Route>
          <Route path="/about">
            <div className="noComponent">
              <p>
                What do you mean? Nothing <code>shady</code> about it.
              </p>
            </div>
          </Route>
          <Route path="/shop">
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
