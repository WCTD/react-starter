import React, { Component } from 'react';
import logo from '../logo.svg';

import {
  Jumbotron
} from 'reactstrap';

class HomePage extends Component {
  render() {
    return (
        <Jumbotron>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="display-3">React Starter Kit</h1>
          <p>
            Edit <code>src/pages/index.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </Jumbotron>
    );
  }
}

export default HomePage;
