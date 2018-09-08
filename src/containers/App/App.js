import React from 'react';
import { Switch, Route } from "react-router-dom";

import Aux from '../../hoc/Aux';
import Navigation from '../../components/Navigation/Navigation';
import { appTitle, urls, navigationList } from '../../resources/constants';

import './App.css';

export default () => (
  <Aux>
    <Navigation navList={ urls } appTitle={ appTitle } />
    <main>
      <Switch>
        { navigationList.map((nav, index) => (
          <Route exact
            key={ index }
            path={ nav.url }
            component={ nav.page } />
        )) }
      </Switch>
    </main>
  </Aux>
);

