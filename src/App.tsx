import React from 'react';
import {ReactComponent as Logo} from './logo.svg';
import './App.css';
import PackagePage from "./pages/PackagePage"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <PackagePage></PackagePage>

    </div>
  );
}

export default PackagePage;
