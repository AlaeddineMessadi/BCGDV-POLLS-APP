/**
 * DetailsPage: Show details of a single question
 * with user submitting vote functionality
 */

import React, { Component } from 'react';
import Aux from '../../hoc/Aux';

class detailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionId: this.props.location.pathname,
      question: null
    };
  }

  render() {
    return (
      <Aux>
        <h1>Question Details </h1>
        <div>{ this.state.questionId } </div>
      </Aux>
    );
  }
}

export default detailsPage;