import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Login from './Login';
import { saveCredentials } from '../actions/credentialsActionCreators';

const mapStateToProps = ({ credentials }) => ({
    credentials
});

const mapDispatchToProps = {
    saveCredentials
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));