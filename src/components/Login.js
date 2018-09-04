import React from 'react';
import PropTypes from 'prop-types';

import { FieldGroup } from './FieldGroup';
import { LoginButton } from './LoginButton';

const Login = (props) =>
    <form
        id="login-form"
        className="was-validated"
        onSubmit={props.onSubmit}
    >
        <FieldGroup
            label="Username"
            id="username"
            type="text"
            autoFocus
            value={props.username}
            onChange={props.onUsernameChange}
        />
        <FieldGroup
            label="Password"
            id="password"
            type="password"
            value={props.password}
            onChange={props.onPasswordChange}
        />
        <LoginButton
            disabled={!props.isFormValid()}
        />
    </form>

Login.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    onUsernameChange: PropTypes.func.isRequired,
    onPasswordChange: PropTypes.func.isRequired,
    isFormValid: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default Login;