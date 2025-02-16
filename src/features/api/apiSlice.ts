import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { WeatherResponse } from './types';

export const apiSlice = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: process.env.BASE_URL
    }),
    endpoints: (builder) => ({
        getCurrentWeather: builder.query<WeatherResponse, string>({
            query: (city) => `current?access_key=${process.env.API_KEY}&query=${city}`,
        }),
    }),
});

export const { useGetCurrentWeatherQuery } = apiSlice