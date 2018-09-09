/**
 * DetailsPage: Show details of a single question
 * with user submitting vote functionality
 */

import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import ApiService from '../../services/ApiService';
import utils from '../../utils/Utils';
import Vote from '../../components/Vote/Choice';

import classes from './DetailsPage.scss';


class detailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionId: utils.idExtractor(this.props.location.pathname),
      question: { choices: [] },
      choiceId: null,
      totalVotes: 0,
      active: null
    };
  }

  componentDidMount() {
    ApiService.get(`/questions/${this.state.questionId}`, {}, (status, data) => {
      // set question state and calculate and set total votes for choices
      this.setState({ question: data, totalVotes: utils.totalVotesExtractor(data.choices) });
    })
  }

  selectChoiceHandler = (e) => {
    // todo use setState
    if (this.state.active) this.state.active.className = '';
    const target = e.currentTarget;

    // set element as active and set the vote id in the state
    target.className = classes.active;
    const choiceId = e.currentTarget.attributes['data-id'].value;
    // update active state 
    this.setState({ active: e.currentTarget, choiceId })

  }

  submitVoteHandler = () => {
    if (!this.state.choiceId) {
      this.refs.vote.style = "background-color: red";
      return;
    }


    ApiService.post(
      `/questions/${this.state.questionId}/choices/${this.state.choiceId}`,
      { question_id: this.state.questionId, choice_id: this.state.choiceId },
      (status, data) => {
        // post the vote through the API
        // clone question state
        const question = this.state.question;

        // change the voted choice
        const index = question.choices.findIndex((o) => o.url === data.url);
        question.choices[index] = data;

        this.setState({ question, totalVotes: this.state.totalVotes + 1 });

        // change question state and button colour
        this.refs.vote.style = "background-color: #a1c45a";
      })
  }

  render() {
    return (
      <Aux>
        <h2>Question Details </h2>
        <div className={ classes.question_container }>
          <p className={ classes.question }>Question: { this.state.question.question }</p>
          <ul>
            { this.state.question.choices.map((choice, index) => {
              console.log(choice.votes, this.state.totalVotes)
              return (

                < Vote
                  key={ index }
                  id={ utils.idExtractor(choice.url) }
                  onClick={ this.selectChoiceHandler }
                  choice={ choice }
                  percentage={ utils.percentCalc(choice.votes, this.state.totalVotes) }
                />
              )
            }) }
          </ul>
        </div>
        <button ref="vote" className={ classes.button } onClick={ this.submitVoteHandler }>Vote!</button>
      </Aux>
    );
  }
}

export default detailsPage;