import React from 'react';
import './App.css';
import PackagePage from "./pages/PackagePage"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header></Header>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/package/:scope/:name/:version">
            <PackagePage />
          </Route>
          <Route path="/package/:scope/:name">
            <PackagePage />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
