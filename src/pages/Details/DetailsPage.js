/**
 * DetailsPage: Show details of a single question
 * with user submitting vote functionality
 */

import React, { Component } from 'react';
import Aux from '../../hoc/Aux';

class detailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = { question: null };
  }

  render() {
    return (
      <Aux>
        <h1>Question Details </h1>
        <div>Question with votes </div>
      </Aux>
    );
  }
}

export default detailsPage;