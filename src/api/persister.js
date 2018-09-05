import storage from 'localforage';

export function load(key) {
    return storage.getItem(key);
}

export function save(key, value) {
    return storage.setItem(key, value);
}

export function remove(key) {
    return storage.removeItem(key);
}