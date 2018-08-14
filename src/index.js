import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import rootReducer from './reducers/rootReducer';
import persister from './middlewares/persister';

const initialState = { credentials: null };
const middlewares = applyMiddleware(persister);
const store = createStore(rootReducer, initialState, middlewares);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

registerServiceWorker();