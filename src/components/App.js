import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import Login from './Login';
import Data from './Data';
import Page from './Page';
import LogoutLink from './LogoutLink';
import { LOGIN, DATA } from './shared/routes';
import { loadCredentials, deleteCredentials } from '../actions'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(loadCredentials());
  }

  resetCredentials = () => {
    this.props.dispatch(deleteCredentials());
  }

  loginRender = (props) =>
    <div>
      <Login />
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