import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import rootReducer from './reducers/rootReducer';
import persister from './middlewares/persister';

const initialState = { credentials: null };
const middlewares = applyMiddleware(persister);
const enhancers = composeWithDevTools(middlewares);

const store = createStore(rootReducer, initialState, enhancers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

registerServiceWorker();