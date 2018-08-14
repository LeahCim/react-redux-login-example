import {
    PERSISTER_LOAD,
    PERSISTER_SAVE,
    PERSISTER_DELETE
} from '../actions/persisterActionTypes';

import { receive } from '../actions/persisterActionCreators';

function load(store, key) {
    const value = localStorage.getItem(key);
    store.dispatch(receive(key, value));
}

function save(store, key, value) {
    localStorage.setItem(key, value);
    store.dispatch(receive(key, value));
}

function remove(store, key) {
    localStorage.removeItem(key);
    store.dispatch(receive(key, null));
}

const persister = store => next => action => {
    switch (action.type) {
        case PERSISTER_LOAD: load(store, action.key); break;
        case PERSISTER_SAVE: save(store, action.key, action.value); break
        case PERSISTER_DELETE: remove(store, action.key); break
        default:
    }
    return next(action);
}

export default persister;