import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Login from './Login';
import { saveCredentials } from '../actions/credentialsActionCreators';

const mapDispatchToProps = {
    saveCredentials
};

export default connect(null, mapDispatchToProps)(withRouter(Login));