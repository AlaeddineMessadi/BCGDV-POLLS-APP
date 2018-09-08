/**
 * HomePage: listing all Questions
 */

import React, { Component } from 'react';
import Aux from '../../hoc/Aux';

import ApiService from '../../services/ApiService';
import Card from '../../components/Card/Card';

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
      console.log(data)
      this.setState({ questions: data });
    })
  }

  render() {

    return (
      <Aux>
        <h1>Questions</h1>
        <div className={ classes.container }>
          {
            this.state.questions.map((q, index) => (
              <Card
                key={ index }
                id={ q.url.split('/').pop(-1) }
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