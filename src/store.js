import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import initialState from './initialState';
import rootReducer from './reducers/rootReducer';
import middlewares from './middlewares';

const enhancers = composeWithDevTools(middlewares);

export default createStore(rootReducer, initialState, enhancers);