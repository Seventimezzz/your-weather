import { TCurrentWeatherSuccessResponse } from "./currentWeather";
import { TGetOneDayHistoricalWeatherSuccessResponse } from "./historicalWeather";

export interface TWeatherErrorResponse {
    error: {
        code: number;
        info: string;
        type: string;
    },
    success: boolean
}

export type TWeatherCurrentResponse = TCurrentWeatherSuccessResponse | TWeatherErrorResponse;

export type TWeatherHistoricalResponse = TGetOneDayHistoricalWeatherSuccessResponse | TWeatherErrorResponse;

export * from './currentWeather'
export * from './historicalWeather'