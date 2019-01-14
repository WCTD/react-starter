import React, { Component } from 'react';

import './App.css';

import { HashRouter as Router, Route } from 'react-router-dom';

import {
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
} from 'reactstrap';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar color="light" light>
            <NavbarBrand href="#/">Starter Kit</NavbarBrand>
            <Nav>
              <NavItem>
                <NavLink href="#/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.we-connect-the-dots.org/">WCTD Home</NavLink>
              </NavItem>
            </Nav>
          </Navbar>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
        </div>
      </Router>
    );
  }
}

export default App;
