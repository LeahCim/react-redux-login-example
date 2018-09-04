import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import Login from './Login';
import { saveCredentials } from '../actions/credentialsActionCreators';
import { DEFAULT_USERNAME, DEFAULT_PASSWORD } from '../config';
import { DATA } from './shared/routes';

class LoginContainer extends Component {
    static propTypes = {
        history: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    }

    state = {
        username: DEFAULT_USERNAME,
        password: DEFAULT_PASSWORD
    }

    onChangeOf = key => ({ target }) =>
        this.setState({
            [key]: target.value
        })

    onSubmit = (event) => {
        event.preventDefault();

        const { username, password } = this.state;
        const { dispatch, history } = this.props;

        dispatch(saveCredentials(username, password));
        history.push(DATA);
    }

    isFormValid = () =>
        this.state.username.length && this.state.password.length

    render = () =>
        <Login
            username={this.state.username}
            password={this.state.password}
            onSubmit={this.onSubmit}
            onUsernameChange={this.onChangeOf('username')}
            onPasswordChange={this.onChangeOf('password')}
            isFormValid={this.isFormValid}
        />;
}

export default connect()(withRouter(LoginContainer));