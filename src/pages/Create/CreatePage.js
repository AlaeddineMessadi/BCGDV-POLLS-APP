/**
 * CreatePage: Creating a question with choices ( minimum 2 choices )
 */

import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import InputChoice from '../../components/InputChoice/InputChoice';
import ApiService from '../../services/ApiService';

import classes from './CreatePage.scss';

class createPage extends Component {
  constructor(props) {
    super(props);
    // by default must be 2 choices at least
    this.state = {
      question: '',
      choices: [{ id: 0, value: '' }, { id: 1, value: '' }],
      submit: true,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ submit: false })

    const form = {
      question: this.state.question,
      choices: this.state.choices.map((e) => e.value)
    };

    ApiService.post(`/questions`, form, (status, data) => {
      console.info('Question is Submitted');
      this.setState({ submit: !this.state.submit });
    });
  }

  addChoiceInput = () => {
    this.setState({
      choices:
        [
          ...this.state.choices,
          ...[{ id: this.state.choices.length, value: '' }]
        ]
    });
  }

  handleChange = (e, id) => {
    // handle question input change
    if (id === undefined || id === null || id < 0) {
      this.setState({ question: e.target.value });
      return;
    }

    // Handle choices input change 
    const choices = this.state.choices;
    const index = choices.findIndex((o) => o.id === id);

    // assign new value
    choices[index].value = e.target.value;

    this.setState({ choices });
  }

  render() {
    return (
      <Aux>
        <h2>Create Question </h2>
        <form onSubmit={ this.handleSubmit } className={ classes.form }>
          <div>
            <label>Question (*):</label>
            <InputChoice id={ null } onChange={ this.handleChange } />
          </div>
          <div>
            <fieldset>
              <legend>Choices (*):</legend>
              <div>
                {
                  this.state.choices.map((e, index) => (<InputChoice key={ index } id={ e.id } onChange={ (event) => this.handleChange(event, e.id) } />))
                }
              </div>
              <a href={ null } className={ classes.more } onClick={ this.addChoiceInput }>+</a>
            </fieldset>
          </div>
          <button type="submit" disabled={ !this.state.submit }>Save</button>
        </form>
      </Aux>
    );
  }
}

export default createPage;