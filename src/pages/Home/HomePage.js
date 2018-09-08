/**
 * HomePage: listing all Questions
 */

import React, { Component } from 'react';
import Aux from '../../hoc/Aux';

import ApiService from '../../services/ApiService';
import Card from '../../components/Card/Card';
import utils from '../../utils/Utils';
import classes from './HomePage.scss';

class homePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      page: 1
    };
  }

  componentDidMount() {
    ApiService.get(`/questions?page=${this.state.page}`, (status, data) => {
      this.setState({ questions: data });
    })
  }

  render() {
    return (
      <Aux>
        <h2>Questions</h2>
        <div className={ classes.container }>
          {
            this.state.questions.map((q, index) => (
              <Card
                key={ index }
                id={ utils.idExtractor(q.url) }
                question={ q.question }
                date={ q.published_at }
                choices={ q.choices } />
            ))
          }
        </div>
      </Aux>
    );
  }
}

export default homePage;