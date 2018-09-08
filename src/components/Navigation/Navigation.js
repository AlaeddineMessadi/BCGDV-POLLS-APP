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
      <nav>
        <Link to={ nav.home.url }> { nav.title }</Link>
        <h1>{ props.title }</h1>
        <Link to={ nav.create.url }> { nav.title }</Link>
      </nav>
    </header>


  );
}

export default navigation;