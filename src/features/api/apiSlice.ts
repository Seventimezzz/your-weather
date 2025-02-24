import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TWeatherCurrentResponse, TWeatherHistoricalResponse } from './types';
import { TGetOneDayHistoricalWeatherArg } from './types/historicalWeather';


export const apiSlice = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: process.env.BASE_URL
    }),
    endpoints: (builder) => ({
        getCurrentWeather: builder.query<TWeatherCurrentResponse, string>({
            query: (position) => `current?access_key=${process.env.API_KEY}&query=${position}`,
        }),
        getOneDayHistoricalWeather: builder.query<TWeatherHistoricalResponse, TGetOneDayHistoricalWeatherArg>({
            query: ({position, date, isHourly}) => `historical?access_key=${process.env.API_KEY}&query=${position}&historical_date=${date}&hourly=${isHourly}`,
        }),
    }),
});

export const { useLazyGetOneDayHistoricalWeatherQuery , useLazyGetCurrentWeatherQuery } = apiSlice