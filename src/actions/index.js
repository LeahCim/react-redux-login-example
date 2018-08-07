export const LOGIN = 'LOGIN';
export const GET_DATA = 'GET_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';

export const login = (username, password) => ({
    type: LOGIN,
    username,
    password
});

export const getData = (credentials) => ({
    type: GET_DATA,
    credentials
});

export const receiveData = (data) => ({
    type: RECEIVE_DATA,
    data
})