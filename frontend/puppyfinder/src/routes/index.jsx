import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import AdoptionListPage from '../pages/AdoptionListPage';
import MenuBar from '../layout/MenuBar';

const Routes = () => (
  <Router>
    <MenuBar />
    <Switch>
      <Route path="/" exact component={AdoptionListPage} />
    </Switch>
  </Router>
);

export default Routes;
