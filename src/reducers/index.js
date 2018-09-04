import { combineReducers } from 'redux';

import credentialsReducer from './credentialsReducer';
import dataReducer from './dataReducer';

export default combineReducers({
    credentials: credentialsReducer,
    data: dataReducer
});