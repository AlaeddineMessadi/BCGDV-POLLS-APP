/**
 * CreatePage: Creating a question with choices ( minimum 2 choices )
 */

import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import InputChoice from '../../components/InputChoice/InputChoice';

import classes from './CreatePage.scss';

class createPage extends Component {
  constructor(props) {
    super(props);
    // 2 choices at least by default 
    this.state = { choices: [0, 1] };
  }

  handleSubmit = () => {
    console.log('submit')
  }

  addChoiceInput = () => {
    this.setState({ choices: [...this.state.choices, [this.state.choices.length]] });
  }
  render() {
    const ch = [1, 2]

    return (
      <Aux>
        <h2>Create Question </h2>
        <form onSubmit={ this.handleSubmit } className={ classes.form }>
          <div>
            <label>Question (*):</label>
            <input type="text" name="question" required />
          </div>
          <div>
            <fieldset>
              <legend>Choices (*):</legend>
              <div ref="choices">
                {
                  this.state.choices.map((e, index) => (<InputChoice key={ index } id={ e } />))
                }
              </div>
              <a href={ null } className={ classes.more } onClick={ this.addChoiceInput }>+</a>
            </fieldset>
          </div>
          <button type="submit">Save</button>
        </form>
      </Aux>
    );
  }
}

export default createPage;