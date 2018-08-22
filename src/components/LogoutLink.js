import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { LOGIN } from './shared/routes';
import { deleteCredentials } from '../actions/credentialsActionCreators';

const LogoutLink = ({ credentials, deleteCredentials }) =>
    !!credentials &&
    <Link to={LOGIN} onClick={deleteCredentials}>Log out</Link>;


LogoutLink.propTypes = {
    credentials: PropTypes.string,
    deleteCredentials: PropTypes.func.isRequired
}

const mapStateToProps = ({ credentials }) => ({
    credentials
});

const mapDispatchToProps = {
    deleteCredentials
};

// eslint-disable-next-line react-redux/prefer-separate-component-file
export default connect(mapStateToProps, mapDispatchToProps)(LogoutLink);