import { connect } from 'react-redux';

import Data from './Data';
import { getData } from '../actions';

const mapStateToProps = (state) => ({
    credentials: state.credentials,
    data: state.data
});

const mapDispatchToProps = {
    getData
};

export default connect(mapStateToProps, mapDispatchToProps)(Data);