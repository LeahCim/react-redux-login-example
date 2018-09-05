import { FETCH_REQUEST } from '../actions/fetcherActionTypes';
import { fetchResponse } from '../actions/fetcherActionCreators';
import fetchJson from '../api/fetchJson';

const fetchRequest = async (dispatch, { responseType, uri, options }) => {
    try {
        const payload = await fetchJson(uri, options);
        dispatch(fetchResponse(responseType, payload));

    } catch (error) {
        dispatch(fetchResponse(responseType, error, true));
    }
};

const fetcher = ({ dispatch }) => next => action => {
    const result = next(action);

    switch (action.type) {
        case FETCH_REQUEST: fetchRequest(dispatch, action); break;
        default:
    }

    return result;
}

export default fetcher;