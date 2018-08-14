import { encode } from 'base-64';

import {
    GET_DATA,
    RECEIVE_DATA,
    UPDATE_STATE
} from './actionTypes';

import { load, save, remove } from './persisterActionCreators';
import { CREDENTIALS } from '../constants';

export const loadCredentials = () => load(CREDENTIALS);

export const saveCredentials = (username, password) => {
    const credentials = encode(`${username}:${password}`);
    return save(CREDENTIALS, credentials);
}

export const deleteCredentials = () => remove(CREDENTIALS);

export const getData = (credentials) => ({
    type: GET_DATA,
    credentials
});

export const receiveData = (data) => ({
    type: RECEIVE_DATA,
    data
});

export const updateState = (update) => ({
    type: UPDATE_STATE,
    update
});