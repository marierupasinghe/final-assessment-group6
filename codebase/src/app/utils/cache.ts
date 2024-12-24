
export const setCache = <T>(key: string, data: T): void => {
    localStorage.setItem(key, JSON.stringify(data));
};

export const getCache = <T>(key: string): T | null => {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
};
