import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import initialState from './initialState';
import rootReducer from './reducers/rootReducer';

const middlewares = applyMiddleware(thunk);
const enhancers = composeWithDevTools(middlewares);

export default createStore(rootReducer, initialState, enhancers);