
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas';

import { PENDING_CREDENTIALS } from './constants';

const initialState = { credentials: PENDING_CREDENTIALS };

const sagaMiddleware = createSagaMiddleware();
const middlewares = applyMiddleware(sagaMiddleware);
const enhancers = composeWithDevTools(middlewares);

const store = createStore(rootReducer, initialState, enhancers);
sagaMiddleware.run(rootSaga);

export default store;