import { getItem, setItem, removeItem } from '../api/storage';

import {
    PERSISTER_LOAD,
    PERSISTER_SAVE,
    PERSISTER_DELETE
} from '../actions/persisterActionTypes';

import { receive } from '../actions/persisterActionCreators';

async function load(dispatch, key) {
    const value = await getItem(key);
    dispatch(receive(key, value));
}

function save(dispatch, key, value) {
    setItem(key, value);
    dispatch(receive(key, value));
}

function remove(dispatch, key) {
    removeItem(key);
    dispatch(receive(key, null));
}

const persister = ({ dispatch }) => next => action => {
    const result = next(action);

    switch (action.type) {
        case PERSISTER_LOAD: load(dispatch, action.key); break;
        case PERSISTER_SAVE: save(dispatch, action.key, action.value); break
        case PERSISTER_DELETE: remove(dispatch, action.key); break
        default:
    }

    return result;
}

export default persister;