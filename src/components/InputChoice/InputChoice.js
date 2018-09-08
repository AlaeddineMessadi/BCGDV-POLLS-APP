import React from 'react';

const inputChoice = (props) => <input type="text" name={ `choice_${props.id}` } required />;

export default inputChoice;