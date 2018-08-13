import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { encode } from 'base-64';
import propTypes from 'prop-types';

import Login from './Login';
import Data from './Data';
import Page from './Page';
import LogoutLink from './LogoutLink';
import { LOGIN, DATA } from './shared/routes';
import { loadCredentials, saveCredentials, deleteCredentials } from '../actions'

class App extends Component {

  state = {
    credentials: null
  }

  componentDidMount() {
    this.props.dispatch(loadCredentials());
  }

  setCredentials = (username, password) => {
    const credentials = encode(`${username}:${password}`);
    this.props.dispatch(saveCredentials(credentials));
  }

  resetCredentials = () => {
    this.props.dispatch(deleteCredentials());
  }

  loginRender = (props) =>
    <div>
      <Login setCredentials={this.setCredentials} {...props} />
      <Link to={DATA}>Data</Link>
    </div>

  dataRender = (props) =>
    <Data
      credentials={this.props.credentials}
      resetCredentials={this.resetCredentials}
      {...props}
    />

  render = () =>
    this.props.credentials !== null &&
    <Router>
      <Page>
        <LogoutLink
          credentials={this.props.credentials}
          resetCredentials={this.resetCredentials}
        />
        <Switch>
          <Route path={LOGIN} render={this.loginRender} />
          <Route path={DATA} render={this.dataRender} />
          <Redirect to={LOGIN} />
        </Switch>
      </Page>
    </Router>
}

App.propTypes = {
  credentials: propTypes.string,
  dispatch: propTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  credentials: state.credentials
});

export default connect(mapStateToProps)(App);