import {
    PERSISTER_LOAD,
    PERSISTER_SAVE,
    PERSISTER_DELETE,
    PERSISTER_RECEIVE,
} from './persisterActionTypes';

export const load = (key) => ({
    type: PERSISTER_LOAD,
    key
});

export const save = (key, value) => ({
    type: PERSISTER_SAVE,
    key,
    value
});

export const remove = (key) => ({
    type: PERSISTER_DELETE,
    key
});

export const receive = (key, value) => ({
    type: PERSISTER_RECEIVE,
    key,
    value
});