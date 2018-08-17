import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import registerServiceWorker from './registerServiceWorker';
import AppContainer from './components/AppContainer';
import rootReducer from './reducers/rootReducer';

import persister from './middlewares/persister';
import fetcher from './middlewares/fetcher';
import deauthoriser from './middlewares/deauthoriser';

import { PENDING_CREDENTIALS } from './constants';

const initialState = { credentials: PENDING_CREDENTIALS };
const middlewares = applyMiddleware(persister, fetcher, deauthoriser);
const enhancers = composeWithDevTools(middlewares);

const store = createStore(rootReducer, initialState, enhancers);

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>, document.getElementById('root'));

registerServiceWorker();