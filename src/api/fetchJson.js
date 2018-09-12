export default async function fetchJson(uri, options) {
    const response = await fetch(uri, options);

    if (response.status === 200)
        return response.json();
    else
        return Promise.reject(response);
}