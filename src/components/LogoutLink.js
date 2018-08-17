import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { LOGIN } from './shared/routes';

const LogoutLink = ({ credentials, resetCredentials }) =>
    !!credentials &&
    <Link to={LOGIN} onClick={resetCredentials}>Log out</Link>;


LogoutLink.propTypes = {
    credentials: PropTypes.string,
    resetCredentials: PropTypes.func.isRequired
}

export default LogoutLink;