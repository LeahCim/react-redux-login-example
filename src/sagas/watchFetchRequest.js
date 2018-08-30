import { takeEvery, call, put } from 'redux-saga/effects';

import { FETCH_REQUEST } from "../actions/fetcherActionTypes";
import { fetchResponse } from "../actions/fetcherActionCreators";

function* fetchRequest({ responseType, uri, options }) {
    try {
        const response = yield call(fetch, uri, options);

        if (response.status === 200) {
            const payload = yield call([response, response.json]);
            yield put(fetchResponse(responseType, payload));

        } else
            yield put(fetchResponse(responseType, response, true));

    } catch (error) {
        yield put(fetchResponse(responseType, error, true));
    }
}

export default function* watchFetchRequest() {
    yield takeEvery(FETCH_REQUEST, fetchRequest);
}