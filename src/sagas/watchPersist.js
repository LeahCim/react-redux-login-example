import { all, takeEvery, call, put } from 'redux-saga/effects';
import storage from 'localforage';

import {
    PERSISTER_LOAD,
    PERSISTER_SAVE,
    PERSISTER_DELETE
} from '../actions/persisterActionTypes';

import { receive } from '../actions/persisterActionCreators';

function* load({ key }) {
    const value = yield call(storage.getItem, key);
    yield put(receive(key, value));
}

function* save({ key, value }) {
    storage.setItem(key, value);
    yield put(receive(key, value));
}

function* remove({ key }) {
    storage.removeItem(key);
    yield put(receive(key, null));
}

export default function* watchPersist() {
    yield all([
        takeEvery(PERSISTER_LOAD, load),
        takeEvery(PERSISTER_SAVE, save),
        takeEvery(PERSISTER_DELETE, remove)
    ]);
}