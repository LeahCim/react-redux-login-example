import { RECEIVE_DATA } from '../actions/actionTypes';
import { deleteCredentials } from '../actions/credentialsActionCreators';

const deauthoriser = store => next => action => {
    if (action.type === RECEIVE_DATA && action.error)
        store.dispatch(deleteCredentials());

    return next(action);
};

export default deauthoriser;