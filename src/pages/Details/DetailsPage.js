/**
 * DetailsPage: Show details of a single question
 * with user submitting vote functionality
 */

import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import ApiService from '../../services/ApiService';
import utils from '../../utils/Utils';

import classes from './DetailsPage.scss';


class detailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionId: utils.idExtractor(this.props.location.pathname),
      question: { choices: [] },
      choiceId: null,
      totalVotes: 1,
      active: null
    };
  }

  componentDidMount() {
    ApiService.get(`/questions/${this.state.questionId}`, (status, data) => {
      // set question state and calculate and set total votes for choices
      this.setState({ question: data, totalVotes: utils.totalVotesExtractor(data.choices) });

    })
  }

  selectChoiceHandler = (e) => {
    if (this.state.active) this.state.active.className = '';
    e.currentTarget.className = classes.active;
    this.setState({ active: e.currentTarget })

  }

  render() {
    return (
      <Aux>
        <h2>Question Details </h2>
        <div className={ classes.question_container }>
          <p className={ classes.question }>Question: { this.state.question.question }</p>
          <ul ref="list">
            { this.state.question.choices.map((choice, index) => (
              <li key={ index } data-id={ utils.idExtractor(choice.url) } onClick={ this.selectChoiceHandler.bind(this) }>
                <span className={ classes.label }>{ choice.choice }</span>
                <span className={ classes.votes }>Votes: { choice.votes }</span>
                <span className={ classes.percentage }>{ utils.percentCalc(choice.votes, this.state.totalVotes) }%</span>
              </li>
            )) }
          </ul>
        </div>
      </Aux>
    );
  }
}

export default detailsPage;