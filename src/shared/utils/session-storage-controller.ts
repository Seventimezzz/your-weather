export enum ESessionStorageItems {
    currentLocation = 'CURRENT_LOCATION'
}

export const setSessionStorageData = (key: ESessionStorageItems, data: unknown) => {
    sessionStorage.setItem(key, JSON.stringify(data))
}

export const getSessionStorageData = (key: ESessionStorageItems): string => {
    return sessionStorage.getItem(key)
}