import { takeEvery, put } from 'redux-saga/effects';

import { RECEIVE_DATA } from '../actions/actionTypes';
import { deleteCredentials } from '../actions/credentialsActionCreators';

function* deauthorise({ error, payload }) {
    if (error && payload.status === 401)
        yield put(deleteCredentials());
}

export default function* watchDeauthorise() {
    yield takeEvery(RECEIVE_DATA, deauthorise);
}