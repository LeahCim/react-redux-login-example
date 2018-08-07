import { encode } from 'base-64';

import { LOGIN, RECEIVE_DATA } from '../actions';

export default function rootReducer(state = {}, action) {
    switch (action.type) {
        case LOGIN: return { ...state, credentials: encode(`${action.username}:${action.password}`) };
        case RECEIVE_DATA: return { ...state, data: action.data };
        default: return state;
    }
}