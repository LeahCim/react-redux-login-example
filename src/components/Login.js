import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

import { FieldGroup } from './FieldGroup';
import { LoginButton } from './LoginButton';
import { DATA } from './shared/routes';
import { DEFAULT_USERNAME, DEFAULT_PASSWORD } from '../config';
import { PENDING_CREDENTIALS } from '../constants';

export default class Login extends Component {

    static propTypes = {
        history: PropTypes.object.isRequired,
        credentials: PropTypes.string,
        saveCredentials: PropTypes.func.isRequired
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

    onSubmit = async (event) => {
        event.preventDefault();

        const { username, password } = this.state;
        const { history } = this.props;

        this.props.saveCredentials(username, password);
        history.push(DATA, { credentials: PENDING_CREDENTIALS });
    }

    isValid = () =>
        this.state.username.length && this.state.password.length

    render = () =>
        this.props.credentials ?
            <Redirect to={DATA} push />
            :
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