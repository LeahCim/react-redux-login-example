import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { FieldGroup } from './FieldGroup';
import { LoginButton } from './LoginButton';
import { DATA } from './shared/routes';
import { DEFAULT_USERNAME, DEFAULT_PASSWORD } from '../config';
import { saveCredentials, updateState } from '../actions';

class Login extends Component {

    static propTypes = {
        username: PropTypes.string,
        password: PropTypes.string,
        history: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired,
        saveCredentials: PropTypes.func.isRequired
    }

    onUsernameChange = ({ target }) =>
        this.props.dispatch(updateState({
            username: target.value
        }))

    onPasswordChange = ({ target }) =>
        this.props.dispatch(updateState({
            password: target.value
        }))

    onSubmit = (event) => {
        event.preventDefault();

        const { username, password } = this.props;
        const { history } = this.props;

        this.props.saveCredentials(username, password);
        history.push(DATA);
    }

    isValid = () =>
        this.props.username.length && this.props.password.length

    render = () =>
        <form id="login-form">
            <FieldGroup
                label="Username"
                id="username"
                autoFocus="autoFocus"
                value={this.props.username}
                onChange={this.onUsernameChange}
            />
            <FieldGroup
                label="Password"
                id="password"
                type="password"
                value={this.props.password}
                onChange={this.onPasswordChange}
            />
            <LoginButton
                onSubmit={this.onSubmit}
                isEnabled={this.isValid}
            />
        </form>
}

const mapStateToProps = ({ username, password }) => ({
    username: username || DEFAULT_USERNAME,
    password: password || DEFAULT_PASSWORD
});

const mapDispatchToProps = {
    saveCredentials
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));