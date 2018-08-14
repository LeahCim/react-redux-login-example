import { RECEIVE_DATA, } from '../actions/actionTypes';
import { PERSISTER_RECEIVE } from '../actions/persisterActionTypes';
import { CREDENTIALS } from '../constants';

function persisterReceive(state, action) {
    switch (action.key) {
        case CREDENTIALS: return {
            ...state,
            credentials: action.value || ''
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

        default: return state;
    }
}