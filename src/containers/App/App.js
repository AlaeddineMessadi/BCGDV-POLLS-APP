import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Aux from '../../hoc/Aux';
import Navigation from '../../components/Navigation/Navigation';
import HomePage from '../../pages/HomePage';
import CreatePage from '../../pages/CreatePage';
import DetailsPage from '../../pages/DetailsPage';

import './App.css';

const appTitle = "BCGDV Poll App";

const urls = {
  home: "/",
  details: "/details",
  create: "/create",
}

const navigationList = [
  { url: urls.home, page: HomePage },
  { url: urls.details, page: DetailsPage },
  { url: urls.create, page: CreatePage }
];

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

