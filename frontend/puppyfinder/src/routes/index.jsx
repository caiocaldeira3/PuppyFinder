import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import LoginPage from '../pages/LoginPage';
import AdoptionListPage from '../pages/AdoptionListPage';
import OrgAdministrationPage from '../pages/OrgAdministrationPage';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={AdoptionListPage} />
      <Route path="/org-admin/:org" component={OrgAdministrationPage} />
      <Route path="/login" component={LoginPage} />
    </Switch>
  </Router>
);

export default Routes;
