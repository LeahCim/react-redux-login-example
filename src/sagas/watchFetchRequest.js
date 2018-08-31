import { takeEvery, call, put } from 'redux-saga/effects';

import { FETCH_REQUEST } from "../actions/fetcherActionTypes";
import { fetchResponse } from "../actions/fetcherActionCreators";

async function fetchJson(uri, options) {
    const response = await fetch(uri, options);

    if (response.status === 200)
        return response.json();
    else
        return Promise.reject(response);
}

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