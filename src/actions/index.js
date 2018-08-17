import { DATA_URI } from '../config';
import { FETCH_REQUEST } from './fetcherActionTypes';

import {
    RECEIVE_DATA,
    UPDATE_STATE
} from './actionTypes';

export const getData = (credentials) => ({
    type: FETCH_REQUEST,
    responseType: RECEIVE_DATA,
    uri: DATA_URI,
    options: {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": `Basic ${credentials}`
        }
    }
});

export const receiveData = (data) => ({
    type: RECEIVE_DATA,
    data
});

export const updateState = (update) => ({
    type: UPDATE_STATE,
    update
});