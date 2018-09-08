/**
 * CreatePage: Creating a question with choices
 */

import React, { Component } from 'react';

class createPage extends Component {
  constructor(props) {
    super(props);
    this.state = { questions: [] };
  }

  render() {
    return (
      <div>
        <h1>Create Question </h1>
        <div>Question form </div>
      </div>
    );
  }
}

export default createPage;