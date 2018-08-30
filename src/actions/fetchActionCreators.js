import fetchJson from '../api/fetchJson';
import { deleteCredentials } from '../actions/credentialsActionCreators';

const fetchResponse = (responseType, payload, error) => ({
    type: responseType,
    payload,
    error
});

export const fetchRequest = (responseType, uri, options) => async (dispatch) => {
    try {
        const payload = await fetchJson(uri, options);
        dispatch(fetchResponse(responseType, payload));

    } catch (error) {
        if (error.status === 401) dispatch(deleteCredentials());
        dispatch(fetchResponse(responseType, error, true));
    }
}