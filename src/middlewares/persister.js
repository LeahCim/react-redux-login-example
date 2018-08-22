import localForage from 'localforage';

import {
    PERSISTER_LOAD,
    PERSISTER_SAVE,
    PERSISTER_DELETE
} from '../actions/persisterActionTypes';

import { receive } from '../actions/persisterActionCreators';

const storage = localForage;

async function load(store, key) {
    const value = await storage.getItem(key);
    store.dispatch(receive(key, value));
}

async function save(store, key, value) {
    await storage.setItem(key, value);
    store.dispatch(receive(key, value));
}

async function remove(store, key) {
    await storage.removeItem(key);
    store.dispatch(receive(key, null));
}

const persister = store => next => action => {
    const result = next(action);

    switch (action.type) {
        case PERSISTER_LOAD: load(store, action.key); break;
        case PERSISTER_SAVE: save(store, action.key, action.value); break
        case PERSISTER_DELETE: remove(store, action.key); break
        default:
    }

    return result;
}

export default persister;