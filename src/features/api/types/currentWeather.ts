import { TCurrent, TLocation, TRequest } from "./general"

export interface TCurrentWeatherSuccessResponse {
    request: TRequest,
    location: TLocation,
    current: TCurrent
}
