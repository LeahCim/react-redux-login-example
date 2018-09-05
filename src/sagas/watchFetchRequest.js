import { takeEvery, call, put } from 'redux-saga/effects';

import { FETCH_REQUEST } from '../actions/fetcherActionTypes';
import { fetchResponse } from '../actions/fetcherActionCreators';
import fetchJson from '../api/fetchJson';

function* fetchRequest({ responseType, uri, options }) {
    try {
        const payload = yield call(fetchJson, uri, options);
        yield put(fetchResponse(responseType, payload));

    } catch (error) {
        yield put(fetchResponse(responseType, error, true));
    }
}

export default function* watchFetchRequest() {
    yield takeEvery(FETCH_REQUEST, fetchRequest);
}