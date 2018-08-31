import { FETCH_REQUEST } from "../actions/fetcherActionTypes";
import { fetchResponse } from "../actions/fetcherActionCreators";

async function fetchJson(uri, options) {
    const response = await fetch(uri, options);

    if (response.status === 200)
        return response.json();
    else
        return Promise.reject(response);
}

const fetchRequest = async (store, { responseType, uri, options }) => {
    try {
        const payload = await fetchJson(uri, options);
        store.dispatch(fetchResponse(responseType, payload));

    } catch (error) {
        store.dispatch(fetchResponse(responseType, error, true));
    }
};

const fetcher = store => next => action => {
    const result = next(action);

    switch (action.type) {
        case FETCH_REQUEST: fetchRequest(store, action); break;
        default:
    }

    return result;
}

export default fetcher;