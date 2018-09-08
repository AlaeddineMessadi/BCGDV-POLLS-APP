/**
 * HomePage: listing all Questions
 */

import React, { Component } from 'react';
import Aux from '../../hoc/Aux';

import axios from 'axios';
import Api from '../../services/ApiService';

import classes from './HomePage.scss';

class homePage extends Component {
  constructor(props) {
    super(props);
    this.state = { questions: [] };
    this.api = new Api();
  }

  componentDidMount() {
    console.log(this.api.getEntryPoint())
    // console.log(entryPoint);

    // axios.get('https://polls.apiblueprint.org')
    //   .then(function (response) {
    //     // handle success
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
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