import { RECEIVE_DATA, UPDATE_STATE } from '../actions/actionTypes';
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

export default function rootReducer(state = {}, action) {
    switch (action.type) {
        case PERSISTER_RECEIVE: return persisterReceive(state, action);

        case RECEIVE_DATA: return {
            ...state,
            data: action.data
        };

        case UPDATE_STATE: return {
            ...state,
            ...action.update
        };

        default: return state;
    }
}