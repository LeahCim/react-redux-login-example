import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';

import { LOGIN } from './shared/routes';
import { NO_CREDENTIALS, PENDING_CREDENTIALS } from '../constants';

PrivateRoute.propTypes = {
    credentials: PropTypes.string
}

const mapStateToProps = ({ credentials }) => ({
    credentials
});

function PrivateRoute(props) {
    var { credentials } = props;
    switch (credentials) {
        case PENDING_CREDENTIALS: return false;
        case NO_CREDENTIALS: return <Redirect to={LOGIN} />;
        default: return <Route {...props} />;
    }
}

// eslint-disable-next-line react-redux/prefer-separate-component-file
export default connect(mapStateToProps)(PrivateRoute); 