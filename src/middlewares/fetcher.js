import { FETCH_REQUEST } from "../actions/fetcherActionTypes";
import { fetchResponse } from "../actions/fetcherActionCreators";

const request = async (store, { responseType, uri, options }) => {
    try {
        const response = await fetch(uri, options);

        if (response.status === 200)
            store.dispatch(fetchResponse(responseType, await response.json()));
        else
            store.dispatch(fetchResponse(responseType, response, true));

    } catch (error) {
        store.dispatch(fetchResponse(responseType, error, true));
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