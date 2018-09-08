/**
 * HomePage: listing all Questions
 */

import React, { Component } from 'react';
import Aux from '../../hoc/Aux';

import ApiService from '../../services/ApiService';

import classes from './HomePage.scss';

class homePage extends Component {
  constructor(props) {
    super(props);
    this.state = { questions: [] };
  }

  componentDidMount() {
    console.log(ApiService.entryPoint);
  }

  render() {

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