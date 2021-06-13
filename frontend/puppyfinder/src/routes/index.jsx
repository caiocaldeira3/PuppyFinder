import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import AdoptionListPage from '../pages/AdoptionListPage';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={AdoptionListPage} />
    </Switch>
  </Router>
);

export default Routes;
