import { PERSISTER_RECEIVE } from '../actions/persisterActionTypes';
import { CREDENTIALS, PENDING_CREDENTIALS, NO_CREDENTIALS } from '../constants';

function persisterReceive(state, { key, value }) {
    if (key !== CREDENTIALS) return state;

    return value || NO_CREDENTIALS;
}

export default function credentialsReducer(state = PENDING_CREDENTIALS, action) {
    switch (action.type) {
        case PERSISTER_RECEIVE: return persisterReceive(state, action);
        default: return state;
    }
}