
export const getLocation = (fn: (position: GeolocationPosition) => void) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(fn);
    } else {
        console.log("Не удалось получить доступ к вашей геолокации")
    }
}