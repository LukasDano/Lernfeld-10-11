type StorageKey = 'userId';

type StorageValue = number;

const defaultValues: Record<StorageKey, StorageValue> = {
    userId: 0,
};

export const getStorageValue = (key: StorageKey): StorageValue => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : defaultValues[key];
};

export const setStorageValue = (key: StorageKey, value: StorageValue): void => {
    const valAsString = JSON.stringify(value);
    localStorage.setItem(key, valAsString);
};
