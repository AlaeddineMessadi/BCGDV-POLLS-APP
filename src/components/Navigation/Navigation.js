/**
 * Navigation Component 
 * 
 * Page Title in the middle  
 * Navigation :
 *    - Go Back button in the left ( Navigate to HomePage )
 *    - Create Question in the right side ( navigate to CreatePage)
 *    or Save Button when it's in the CreatePage
 */

import React from 'react';
import { Link } from "react-router-dom";

const navigation = (props) => {
  return (
    <header>
      <h1>{ props.title }</h1>
    </header>
  );
}

export default navigation;