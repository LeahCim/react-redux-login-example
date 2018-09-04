import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
const middlewares = applyMiddleware(sagaMiddleware);
const enhancers = composeWithDevTools(middlewares);

const store = createStore(rootReducer, {}, enhancers);
sagaMiddleware.run(rootSaga);

export default store;