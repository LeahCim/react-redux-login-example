import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/rootReducer';
import middlewares from './middlewares';

import { PENDING_CREDENTIALS } from './constants';

const initialState = { credentials: PENDING_CREDENTIALS };
const enhancers = composeWithDevTools(middlewares);

export default createStore(rootReducer, initialState, enhancers);