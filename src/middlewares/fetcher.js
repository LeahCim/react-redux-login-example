import { FETCH_REQUEST } from "../actions/fetcherActionTypes";
import { fetchResponse } from "../actions/fetcherAcitonCreators";

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
    switch (action.type) {
        case FETCH_REQUEST: request(store, action); break;
        default:
    }

    return next(action);
}

export default fetcher;