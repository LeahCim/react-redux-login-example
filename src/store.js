import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

import { PENDING_CREDENTIALS } from './constants';

const initialState = { credentials: PENDING_CREDENTIALS };
const middlewares = applyMiddleware(thunk);
const enhancers = composeWithDevTools(middlewares);

export default createStore(rootReducer, initialState, enhancers);