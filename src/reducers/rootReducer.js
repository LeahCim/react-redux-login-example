import { RECEIVE_DATA } from '../actions/actionTypes';
import { PERSISTER_RECEIVE } from '../actions/persisterActionTypes';
import { CREDENTIALS, NO_CREDENTIALS } from '../constants';

function persisterReceive(state, action) {
    switch (action.key) {
        case CREDENTIALS: return {
            ...state,
            credentials: action.value || NO_CREDENTIALS
        };

        default: return state;
    }
}

function receiveData(state, action) {
    if (action.error) return state;

    return {
        ...state,
        data: action.payload.Results
    };
}

export default function rootReducer(state = {}, action) {
    switch (action.type) {
        case PERSISTER_RECEIVE: return persisterReceive(state, action);
        case RECEIVE_DATA: return receiveData(state, action);
        default: return state;
    }
}