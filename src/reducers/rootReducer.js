import { RECEIVE_DATA, SET_CREDENTIALS } from '../actions/actionTypes';

export default function rootReducer(state = {}, action) {
    switch (action.type) {
        case SET_CREDENTIALS: return {
            ...state,
            credentials: action.credentials
        };

        case RECEIVE_DATA: return {
            ...state,
            data: action.data
        };

        default: return state;
    }
}