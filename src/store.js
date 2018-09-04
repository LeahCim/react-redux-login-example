import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import middlewares from './middlewares';

const enhancers = composeWithDevTools(middlewares);

export default createStore(rootReducer, {}, enhancers);