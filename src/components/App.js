import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import propTypes from 'prop-types';

import Login from './Login';
import DataContainer from './DataContainer';
import Page from './Page';
import LogoutLink from './LogoutLink';
import { LOGIN, DATA } from './shared/routes';
import PrivateRoute from './PrivateRoute';

export default class App extends Component {

  static propTypes = {
    credentials: propTypes.string,
    loadCredentials: propTypes.func.isRequired,
    deleteCredentials: propTypes.func.isRequired
  }

  componentDidMount() {
    this.props.loadCredentials();
  }

  loginRender = (props) =>
    <div>
      <Login />
      <Link to={DATA}>Data</Link>
    </div>

  render = () =>
    <Router>
      <Page>
        <LogoutLink
          credentials={this.props.credentials}
          resetCredentials={this.props.deleteCredentials}
        />
        <Switch>
          <Route path={LOGIN} render={this.loginRender} />
          <PrivateRoute path={DATA} component={DataContainer} />
          <Redirect to={LOGIN} />
        </Switch>
      </Page>
    </Router>
}