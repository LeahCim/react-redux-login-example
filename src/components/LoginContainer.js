import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Login from './Login';
import { saveCredentials } from '../actions/credentialsActionCreators';
import { updateState } from '../actions';


const mapDispatchToProps = {
    saveCredentials,
    updateState
}

export default connect(null, mapDispatchToProps)(withRouter(Login));