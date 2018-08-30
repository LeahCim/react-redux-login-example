import { applyMiddleware } from 'redux';

import persister from './persister';
import fetcher from './fetcher';
import deauthoriser from './deauthoriser';

export default applyMiddleware(persister, fetcher, deauthoriser);