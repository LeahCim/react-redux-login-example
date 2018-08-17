import { connect } from 'react-redux';

import Data from './Data';
import { deleteCredentials } from '../actions';

const mapStateToProps = (state) => ({
    credentials: state.credentials
});

const mapDispatchToProps = {
    deleteCredentials
};

export default connect(mapStateToProps, mapDispatchToProps)(Data);