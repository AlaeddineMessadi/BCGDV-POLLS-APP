import React from 'react';

import classes from './Choice.scss';

const vote = (props) => {
  return (
    <li data-id={ props.id } onClick={ props.onClick }>
      <span className={ classes.label }>{ props.choice.choice }</span>
      <span className={ classes.votes }>Votes: { props.choice.votes }</span>
      <span className={ classes.percentage }>{ props.percentage }%</span>
    </li>
  );
}

export default vote;