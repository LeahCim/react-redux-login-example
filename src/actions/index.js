import {
    LOAD_CREDENTIALS,
    SAVE_CREDENTIALS,
    DELETE_CREDENTIALS,
    SET_CREDENTIALS,
    GET_DATA,
    RECEIVE_DATA
} from './actionTypes';

export const loadCredentials = () => ({
    type: LOAD_CREDENTIALS
});

export const saveCredentials = (credentials) => ({
    type: SAVE_CREDENTIALS,
    credentials
})

export const deleteCredentials = (credentials) => ({
    type: DELETE_CREDENTIALS,
    credentials
})


export const setCredentials = (credentials) => ({
    type: SET_CREDENTIALS,
    credentials
})

export const getData = (credentials) => ({
    type: GET_DATA,
    credentials
});

export const receiveData = (data) => ({
    type: RECEIVE_DATA,
    data
})