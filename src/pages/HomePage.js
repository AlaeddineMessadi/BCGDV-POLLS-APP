/**
 * HomePage: listing all Questions
 */

import React, { Component } from 'react';

class homePage extends Component {
  constructor(props) {
    super(props);
    this.state = { questions: [] };
  }

  render() {
    return (
      <div>
        <h1>Questions </h1>
        <div>List of questions </div>
      </div>
    );
  }
}

export default homePage;