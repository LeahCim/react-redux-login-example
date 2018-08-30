import storage from 'localforage';

export function load(key) {
    return storage.getItem(key);
}

export function save(key, value) {
    storage.setItem(key, value);
}

export function remove(key) {
    storage.removeItem(key);
}