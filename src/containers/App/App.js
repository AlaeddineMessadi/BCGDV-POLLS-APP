import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Aux from '../../hoc/Aux';
import HomePage from '../../pages/HomePage';
import CreatePage from '../../pages/CreatePage';
import DetailsPage from '../../pages/DetailsPage';

import './App.css';

const navigationList = [
  { url: "/", title: "Questions", page: HomePage },
  { url: "/details", title: "Question details", page: DetailsPage },
  { url: "/create", title: "Create question", page: CreatePage }
];

export default () => (
  <Aux>
    <Navigation navList={ navigationList } />
    <main>
      <Switch>
        { navigationList.map((nav, index) => (
          <Route exact path={ nav.url } component={ nav.page } key={ index } />
        )) }
      </Switch>
    </main>
  </Aux>
);


export default App;
