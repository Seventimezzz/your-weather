import { ESessionStorageItems, getSessionStorageData } from "./session-storage-controller"


export const transformGeolocationToString = (recipient: 'yandex' | 'weather'): string => {
    
    const location = JSON.parse(getSessionStorageData(ESessionStorageItems.currentLocation)) as GeolocationPosition
    
    switch(recipient) {
    case 'weather': 
        return `${location.coords.latitude},${location.coords.longitude}`
    case 'yandex': 
        return `${location.coords.longitude},${location.coords.latitude}`
    }
}

