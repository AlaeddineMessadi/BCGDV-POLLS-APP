import React from 'react';
import { Link } from "react-router-dom";
import moment from 'moment';
import { urls } from '../../resources/constants';

import classes from './Card.scss';

const card = ({ question, date, choices }) => {

  const dateTime = moment(date).format('D MMM YYYY, h:mm:ss A');

  return (
    <div className={ classes.card }>
      <Link to={ urls.details } className={ classes.btn }>
        <h3 className={ classes.question }>{ question }</h3>
        <p className={ classes.published }>Published Date: <span>{ moment(date).format('D MMM YYYY, h:mm:ss A') }</span></p>
        <p>Number of Choices: { choices.length }</p>
      </Link>
    </div>
  );
}

export default card;