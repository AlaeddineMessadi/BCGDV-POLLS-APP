/**
 * CreatePage: Creating a question with choices
 */

import React, { Component } from 'react';
import Aux from '../hoc/Aux';

class createPage extends Component {
  constructor(props) {
    super(props);
    this.state = { questions: [] };
  }

  render() {
    return (
      <Aux>
        <h1>Create Question </h1>
        <div>Question form </div>
      </Aux>
    );
  }
}

export default createPage;