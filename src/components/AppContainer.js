import { connect } from 'react-redux';

import App from './App';
import { loadCredentials } from '../actions/credentialsActionCreators';

const mapDispatchToProps = {
    loadCredentials,
};

export default connect(null, mapDispatchToProps)(App);