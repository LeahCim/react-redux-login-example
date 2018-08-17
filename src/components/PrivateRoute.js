import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';

import { LOGIN } from './shared/routes';
import { NO_CREDENTIALS, PENDING_CREDENTIALS } from '../constants';

const mapStateToProps = ({ credentials }) => ({
    credentials
});

const PrivateRoute = connect(mapStateToProps)((props) => {
    const { credentials } = props;

    switch (credentials) {
        case PENDING_CREDENTIALS: return false;
        case NO_CREDENTIALS: return <Redirect to={LOGIN} />;
        default: return <Route {...props} />;
    }
});

PrivateRoute.propTypes = {
    credentials: PropTypes.string,
}

export default PrivateRoute; 