import React from 'react';

const inputChoice = (props) => <input type="text" name={ `choice_${props.id}` } onChange={ (event) => props.onChange(event, props.id) } required />;

export default inputChoice;