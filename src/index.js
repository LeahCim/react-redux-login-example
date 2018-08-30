import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import registerServiceWorker from './registerServiceWorker';
import AppContainer from './components/AppContainer';
import rootReducer from './reducers/rootReducer';
import middlewares from './middlewares';

import { PENDING_CREDENTIALS } from './constants';

const initialState = { credentials: PENDING_CREDENTIALS };
const enhancers = composeWithDevTools(middlewares);

const store = createStore(rootReducer, initialState, enhancers);

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>, document.getElementById('root'));

registerServiceWorker();