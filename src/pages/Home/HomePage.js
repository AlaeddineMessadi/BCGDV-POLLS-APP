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
    this.loadQuestions(this.state.page);
  }

  loadQuestions = (page) => {

    ApiService.get(`/questions`, { page }, (status, data) => {
      this.setState({
        questions:
          [
            ...this.state.questions,
            ...data
          ],
        page: page + 1
      });
    })
  }

  render() {
    return (
      <Aux>
        <h2>Questions</h2>
        <div className={ classes.container }>
          {
            this.state.questions.map((q, index) => {
              return (
                <Card
                  key={ index }
                  id={ utils.idExtractor(q.url) }
                  question={ q.question }
                  date={ q.published_at }
                  choices={ q.choices } />
              )
            })
          }
        </div>
        <button className={ classes.more } onClick={ () => this.loadQuestions(this.state.page) }>More..</button>
      </Aux>
    );
  }
}

export default homePage;