import {
    LOAD_CREDENTIALS,
    SAVE_CREDENTIALS,
    DELETE_CREDENTIALS
} from '../actions/actionTypes';

import { setCredentials } from '../actions'

const CREDENTIALS = 'credentials';

function loadCredentials(store) {
    const credentials = localStorage.getItem(CREDENTIALS) || '';
    store.dispatch(setCredentials(credentials));
}

function saveCredentials(store, credentials) {
    localStorage.setItem(CREDENTIALS, credentials);
    store.dispatch(setCredentials(credentials));
}

function deleteCredentials(store, credentials) {
    localStorage.removeItem(CREDENTIALS);
    store.dispatch(setCredentials(''));
}

const persister = store => next => action => {
    switch (action.type) {
        case LOAD_CREDENTIALS: loadCredentials(store); break;
        case SAVE_CREDENTIALS: saveCredentials(store, action.credentials); break
        case DELETE_CREDENTIALS: deleteCredentials(store); break
        default:
    }
    return next(action);
}

export default persister;