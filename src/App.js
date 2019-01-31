import React, { Component } from 'react';
import {Router} from "react-router-dom";
import Routes from "./Routes";
import createHistory from 'history/createBrowserHistory';
import logo from './logo.svg';
import './App.scss';
import dotenv from 'dotenv';
import dotenvExpand  from 'dotenv-expand';

const myEnv = dotenv.config();
dotenvExpand(myEnv);

const history = createHistory();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
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
        <Router history={history}>
          <Routes />
        </Router>
      </div>
    );
  }
}

export default App;
