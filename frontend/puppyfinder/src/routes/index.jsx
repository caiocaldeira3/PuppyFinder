import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import LoginPage from '../pages/LoginPage';
import AdoptionListPage from '../pages/AdoptionListPage';
import OrgAdministrationPage from '../pages/OrgAdministrationPage';
import Profile from '../pages/Profile';
import ApplicationForm from '../pages/ApplicationForm';
import AddPet from '../pages/AddPet';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={LoginPage} />
      <Route path="/org-admin/:org" component={OrgAdministrationPage} />
      <Route path="/profile/:prof" component={Profile} />
      <Route path="/adoption-list" component={AdoptionListPage} />
      <Route path="/application-form" component={ApplicationForm} />
      <Route path="/add-pet" component={AddPet} />
    </Switch>
  </Router>
);

export default Routes;
