import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import initialState from './initialState';
import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = applyMiddleware(sagaMiddleware);
const enhancers = composeWithDevTools(middlewares);

const store = createStore(rootReducer, initialState, enhancers);
sagaMiddleware.run(rootSaga);

export default store;