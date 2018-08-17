import { encode } from 'base-64';

import { load, save, remove } from './persisterActionCreators';
import { CREDENTIALS } from '../constants';

export const loadCredentials = () => load(CREDENTIALS);

export const saveCredentials = (username, password) => {
    const credentials = encode(`${username}:${password}`);
    return save(CREDENTIALS, credentials);
}

export const deleteCredentials = () => remove(CREDENTIALS);