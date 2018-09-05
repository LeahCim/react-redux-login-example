import storage from 'localforage';

export async function load(key) {
    try {
        return await storage.getItem(key);
    } catch (_) {
        return null;
    }
}

export async function save(key, value) {
    try {
        return await storage.setItem(key, value);
    } catch (_) {
        return value
    }
}

export async function remove(key) {
    try {
        return await storage.removeItem(key);
    } catch (_) {
        return;
    }
}