import { RECEIVE_DATA } from '../actions/actionTypes';
import { deleteCredentials } from '../actions/credentialsActionCreators';

const deauthoriser = ({ dispatch }) => next => action => {
    const result = next(action);

    if (action.type === RECEIVE_DATA &&
        action.error &&
        action.payload.status === 401) {

        dispatch(deleteCredentials());
    }

    return result;
};

export default deauthoriser;