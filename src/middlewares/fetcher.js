import { FETCH_REQUEST } from "../actions/fetcherActionTypes";
import { fetchResponse } from "../actions/fetcherActionCreators";

async function tryFetch(store, { responseType, uri, options }) {
    const response = await fetch(uri, options);

    if (response.status === 200) {
        const payload = await response.json();
        store.dispatch(fetchResponse(responseType, payload));
    } else
        store.dispatch(fetchResponse(responseType, response, true));
}

const request = async (store, action) => {
    try {
        await tryFetch(store, action);

    } catch (error) {
        store.dispatch(fetchResponse(action.responseType, error, true));
    }
};

const fetcher = store => next => action => {
    const result = next(action);

    switch (action.type) {
        case FETCH_REQUEST: request(store, action); break;
        default:
    }

    return result;
}

export default fetcher;