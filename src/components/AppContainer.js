import { connect } from 'react-redux';

import App from './App';
import { loadCredentials, deleteCredentials } from '../actions'

const mapStateToProps = (state) => ({
    credentials: state.credentials
});

const mapDispatchToProps = {
    loadCredentials,
    deleteCredentials
};

export default connect(mapStateToProps, mapDispatchToProps)(App);