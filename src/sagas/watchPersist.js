import { all, takeEvery, call, put } from 'redux-saga/effects';

import {
    PERSISTER_LOAD,
    PERSISTER_SAVE,
    PERSISTER_DELETE
} from '../actions/persisterActionTypes';

import { receive } from '../actions/persisterActionCreators';
import { getItem, setItem, removeItem } from '../api/storage';

function* load({ key }) {
    const value = yield call(getItem, key);
    yield put(receive(key, value));
}

function* save({ key, value }) {
    setItem(key, value);
    yield put(receive(key, value));
}

function* remove({ key }) {
    removeItem(key);
    yield put(receive(key, null));
}

export default function* watchPersist() {
    yield all([
        takeEvery(PERSISTER_LOAD, load),
        takeEvery(PERSISTER_SAVE, save),
        takeEvery(PERSISTER_DELETE, remove)
    ]);
}