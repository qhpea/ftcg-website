import React, { Fragment } from "react";
import "./index.css"

import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./Search";
import About from "./About";

export default function App() {
  return (
  <Router>
    <main>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/search">Search</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
      <Route path="/" render={() => <h1>Welcome!</h1>} />
      {/* <Route path="/search" component={Search} /> */}
      <Route path="/about" render={About} />

    </main>
</Router>
  );
}
