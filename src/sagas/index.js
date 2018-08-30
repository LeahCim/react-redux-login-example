import { all } from 'redux-saga/effects';

import watchPersist from './watchPersist';
import watchFetchRequest from './watchFetchRequest';
import watchDeauthorise from './watchDeauthorise';

export default function* rootSaga() {
    yield all([watchPersist(), watchFetchRequest(), watchDeauthorise()]);
}