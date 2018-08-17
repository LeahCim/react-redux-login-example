import { FETCH_REQUEST } from './fetcherActionTypes';

export const fetchRequest = (responseType, uri, options) => ({
    type: FETCH_REQUEST,
    responseType,
    uri,
    options
});

export const fetchResponse = (responseType, payload, error) => ({
    type: responseType,
    payload,
    error
});