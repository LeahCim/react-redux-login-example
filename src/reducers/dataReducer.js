import { RECEIVE_DATA } from '../actions/actionTypes';
import { PERSISTER_RECEIVE } from '../actions/persisterActionTypes';
import { CREDENTIALS } from '../constants';

function persisterReceive(state, action) {
    if (action.key !== CREDENTIALS) return state;

    return [];
}

function receiveData(state, action) {
    if (action.error) return state;

    return [...action.payload.Results];
}

export default function dataReducer(state = [], action) {
    switch (action.type) {
        case PERSISTER_RECEIVE: return persisterReceive(state, action);
        case RECEIVE_DATA: return receiveData(state, action);
        default: return state;
    }
}