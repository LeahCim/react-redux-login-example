import { FETCH_REQUEST } from "../actions/fetcherActionTypes";
import { fetchResponse } from "../actions/fetcherActionCreators";

async function fetchJson(uri, options) {
    const response = await fetch(uri, options);

    if (response.status === 200)
        return response.json();
    else
        return Promise.reject(response);
}

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