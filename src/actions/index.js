import { DATA_URI } from '../config';
import { RECEIVE_DATA } from './actionTypes';
import { fetchRequest } from './fetchActionCreators';

export const getData = (credentials) => fetchRequest(
    RECEIVE_DATA,
    DATA_URI,
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": `Basic ${credentials}`
        }
    }
);