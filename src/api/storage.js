import storage from 'localforage';

export async function getItem(key) {
    try {
        return await storage.getItem(key);
    } catch (_) {
        return null;
    }
}

export async function setItem(key, value) {
    try {
        return await storage.setItem(key, value);
    } catch (_) {
        return value
    }
}

export async function removeItem(key) {
    try {
        return await storage.removeItem(key);
    } catch (_) {
        return;
    }
}