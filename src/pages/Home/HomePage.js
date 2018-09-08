/**
 * HomePage: listing all Questions
 */

import React, { Component } from 'react';
import Aux from '../../hoc/Aux';

import classes from './HomePage.scss';

class homePage extends Component {
  constructor(props) {
    super(props);
    this.state = { questions: [] };
  }


  render() {
    console.log(this.context);
    return (
      <Aux>
        <h1>Questions</h1>
        <div className={ classes.container }>
          List of questions
          </div>
      </Aux>
    );
  }
}

export default homePage;