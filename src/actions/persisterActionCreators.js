import { PERSISTER_RECEIVE } from './persisterActionTypes';

export const receive = (key, value) => ({
    type: PERSISTER_RECEIVE,
    key,
    value
});