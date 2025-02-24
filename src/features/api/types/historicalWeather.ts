import { TCurrent, TLocation, TRequest } from "./general";

export interface TGetOneDayHistoricalWeatherArg {
    position: string;
    date: string;
    isHourly: string 
};

export interface THourlyWeather {
    time: string;
    temperature: number;
    wind_speed: number;
    wind_degree: number;
    wind_dir: string;
    weather_code: number;
    weather_icons: string[];
    weather_descriptions: string[];
    precip: number;
    humidity: number;
    visibility: number;
    pressure: number;
    cloudcover: number;
    heatindex: number;
    dewpoint: number;
    windchill: number;
    windgust: number;
    feelslike: number;
    chanceofrain: number;
    chanceofremdry: number;
    chanceofwindy: number;
    chanceofovercast: number;
    chanceofsunshine: number;
    chanceoffrost: number;
    chanceofhightemp: number;
    chanceoffog: number;
    chanceofsnow: number;
    chanceofthunder: number;
    uv_index: number;
}

interface TAstro {
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    moon_phase: string;
    moon_illumination: number;
}

interface TDailyWeather {
    date: string;
    date_epoch: number;
    astro: TAstro;
    mintemp: number;
    maxtemp: number;
    avgtemp: number;
    totalsnow: number;
    sunhour: number;
    uv_index: number;
    hourly: THourlyWeather[];
}

export interface THistoricalWeather {
    [date: string]: TDailyWeather;
}

export type TGetOneDayHistoricalWeatherSuccessResponse = {
    request: TRequest,
    location: TLocation,
    current: TCurrent,
    historical: THistoricalWeather
}