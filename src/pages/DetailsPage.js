/**
 * DetailsPage: Show details of a single question
 * with user submitting vote functionality
 */

import React, { Component } from 'react';

class detailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = { question: null };
  }

  render() {
    return (
      <div>
        <h1>Question Details </h1>
        <div>Question with votes </div>
      </div>
    );
  }
}

export default detailsPage;