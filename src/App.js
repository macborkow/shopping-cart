import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav"

function App() {
  return (
    <Router>
      <div className='app'>
      <Nav />
      <Switch>
        <Route exact path="/">
          <p>Home</p>
        </Route>
        <Route path="/about">
          <p>Go home</p>
        </Route>
        <Route path="/:whatever">
          <p>Page not found</p>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
