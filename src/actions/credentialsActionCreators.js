import { encode } from 'base-64';

import { load, save, remove } from '../api/persister';
import { receive } from './persisterActionCreators';
import { CREDENTIALS } from '../constants';

export const loadCredentials = () => async (dispatch) => {
    const credentials = await load(CREDENTIALS);
    dispatch(receive(CREDENTIALS, credentials));
}

export function saveCredentials(username, password) {
    const credentials = encode(`${username}:${password}`);
    save(CREDENTIALS, credentials);
    return receive(CREDENTIALS, credentials);
}

export function deleteCredentials() {
    remove(CREDENTIALS);
    return receive(CREDENTIALS, null);
}