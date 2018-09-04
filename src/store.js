import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const middlewares = applyMiddleware(thunk);
const enhancers = composeWithDevTools(middlewares);

export default createStore(rootReducer, {}, enhancers);