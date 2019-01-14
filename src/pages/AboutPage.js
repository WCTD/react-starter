import React, { Component } from 'react';

import {
  Jumbotron
} from 'reactstrap';

class AboutPage extends Component {
  render() {
    return (
        <Jumbotron>
          <h1 className="display-3">About</h1>
          <p>
            Edit <code>src/pages/about.js</code> and save to reload.
          </p>
        </Jumbotron>
    );
  }
}

export default AboutPage;
