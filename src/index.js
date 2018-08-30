import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import registerServiceWorker from './registerServiceWorker';
import AppContainer from './components/AppContainer';
import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas';

import { PENDING_CREDENTIALS } from './constants';

const initialState = { credentials: PENDING_CREDENTIALS };

const sagaMiddleware = createSagaMiddleware();
const middlewares = applyMiddleware(sagaMiddleware);
const enhancers = composeWithDevTools(middlewares);

const store = createStore(rootReducer, initialState, enhancers);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>, document.getElementById('root'));

registerServiceWorker();