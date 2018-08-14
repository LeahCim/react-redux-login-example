import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { FieldGroup } from './FieldGroup';
import { LoginButton } from './LoginButton';
import { DATA } from './shared/routes';
import { DEFAULT_USERNAME, DEFAULT_PASSWORD } from '../config';
import { saveCredentials } from '../actions';

class Login extends Component {

    static propTypes = {
        history: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    }

    state = {
        username: DEFAULT_USERNAME,
        password: DEFAULT_PASSWORD
    }

    onUsernameChange = ({ target }) =>
        this.setState({
            username: target.value
        })

    onPasswordChange = ({ target }) =>
        this.setState({
            password: target.value
        })

    onSubmit = (event) => {
        event.preventDefault();

        const { username, password } = this.state;
        const { history } = this.props;

        this.setCredentials(username, password);
        history.push(DATA);
    }

    isValid = () =>
        this.state.username.length && this.state.password.length

    setCredentials = (username, password) => {
        this.props.dispatch(saveCredentials(username, password));
    }

    render = () =>
        <form id="login-form">
            <FieldGroup
                label="Username"
                id="username"
                autoFocus="autoFocus"
                value={this.state.username}
                onChange={this.onUsernameChange}
            />
            <FieldGroup
                label="Password"
                id="password"
                type="password"
                value={this.state.password}
                onChange={this.onPasswordChange}
            />
            <LoginButton
                onSubmit={this.onSubmit}
                isEnabled={this.isValid}
            />
        </form>
}

export default connect()(Login);