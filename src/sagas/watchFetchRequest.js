import { takeEvery, call, put } from 'redux-saga/effects';

import { FETCH_REQUEST } from "../actions/fetcherActionTypes";
import { fetchResponse } from "../actions/fetcherActionCreators";

function* tryFetch({ responseType, uri, options }) {
    const response = yield call(fetch, uri, options);

    if (response.status === 200) {
        const payload = yield call([response, response.json]);
        yield put(fetchResponse(responseType, payload));
    } else
        yield put(fetchResponse(responseType, response, true));
}

function* fetchRequest(action) {
    try {
        yield* tryFetch(action);

    } catch (error) {
        yield put(fetchResponse(action.responseType, error, true));
    }
}

export default function* watchFetchRequest() {
    yield takeEvery(FETCH_REQUEST, fetchRequest);
}