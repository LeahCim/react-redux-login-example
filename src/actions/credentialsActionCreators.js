import { encode } from 'base-64';

import { getItem, setItem, removeItem } from '../api/storage';
import { receive } from './persisterActionCreators';
import { CREDENTIALS } from '../constants';

export const loadCredentials = () => async (dispatch) => {
    const credentials = await getItem(CREDENTIALS);
    dispatch(receive(CREDENTIALS, credentials));
}

export function saveCredentials(username, password) {
    const credentials = encode(`${username}:${password}`);
    setItem(CREDENTIALS, credentials);
    return receive(CREDENTIALS, credentials);
}

export function deleteCredentials() {
    removeItem(CREDENTIALS);
    return receive(CREDENTIALS, null);
}