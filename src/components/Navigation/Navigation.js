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

import classes from './Navigation.scss';

const navigation = (props) => {
  return (
    <header>
      <nav className={ classes.navigation }>
        <ul>
          <li>
            <Link to={ props.navList.home }> { "<Back" } </Link>
          </li>
          <li className={ classes.title }><h1>{ props.appTitle }</h1></li>
          <li>
            <Link to={ props.navList.create }> Create</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default navigation;